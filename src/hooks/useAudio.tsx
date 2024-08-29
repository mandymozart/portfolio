import { createContext, ReactNode, useContext, useState } from 'react';
import { synthParams, updateSynthParams } from '../audio';

// Define the shape of your context
interface AudioContextType {
  params: typeof synthParams;
  updateParams: (newParams: Partial<typeof synthParams>) => void;
}

// Create a context with the correct type and a default value
const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [params, setParams] = useState(synthParams);

  const updateParams = (newParams: Partial<typeof synthParams>) => {
    setParams((prevParams) => ({ ...prevParams, ...newParams }));
    updateSynthParams(newParams);
  };

  return (
    <AudioContext.Provider value={{ params, updateParams }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

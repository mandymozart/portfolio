import { sameRouteTone } from '@/audioConfig';
import { routes } from '@/slideInRoutes';
import { useEffect, useRef } from 'react';
import * as Tone from 'tone';

const useMonoSynth = () => {
  const monoSynthRef = useRef<Tone.MonoSynth | null>(null);

  const playToneAtRoute = (key?: string) => {
    const selectedRoute = Object.values(routes).find(
      route => route.key === key
    );
    const tone = selectedRoute ? selectedRoute.tone : sameRouteTone;
    if (monoSynthRef.current)
      monoSynthRef.current.triggerAttackRelease(tone.note, tone.duration);
  };

  useEffect(() => {
    monoSynthRef.current = new Tone.MonoSynth().toDestination();

    return () => {
      // Clean up the MonoSynth instance when the component unmounts
      monoSynthRef.current?.dispose();
    };
  }, []);

  return { monoSynthRef, playToneAtRoute };
};

export default useMonoSynth;

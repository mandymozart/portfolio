import styled from '@emotion/styled';
import { paramConfig, ParamConfig } from './../audio.config';
import { useAudio } from './../hooks/useAudio';

// Ensure the params and the handler have proper types
interface Params {
  [key: string]: number | string;
}

const Container = styled.div`
  position: fixed;
  bottom: 2rem;
  background: rgba(253, 253, 253, 0.2);
  border-radius: 2rem;
  backdrop-filter: blur(10px);
  padding: 2rem;
  left: 2rem;
  right: 2rem;
  z-index: 10;

  .json {
    width: 100%;
    font-size: 0.7rem;
    margin-bottom: 1rem;
  }

  .control-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  input, select {
    width: 100%;
  }
`;



const SynthControlPanel: React.FC = () => {
  const { params, updateParams }:{ params: ParamConfig, updateParams: Function} = useAudio();

  const handleParamChange = (newParams: Params) => {
    updateParams(newParams);
  };

  return (
    <Container>
      <div className='json'>
        {JSON.stringify(params)}
      </div>
      <div className="control-grid">
        {Object.keys(paramConfig).map((section) => (
          <div key={section}>
            <h3>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
            {Object.entries(paramConfig[section]).map(([paramName, paramConfig]) => (
              <label key={paramName}>
                {paramConfig.label}:
                {paramConfig.type === 'range' && (
                  <input
                    type="range"
                    name={paramName}
                    min={paramConfig.min}
                    max={paramConfig.max}
                    step={paramConfig.step}
                    value={params[paramName] as number}  // Cast to number since it's a range input
                    onChange={(e) =>
                      handleParamChange({ [paramName]: parseFloat(e.target.value) })
                    }
                  />
                )}
                {paramConfig.type === 'select' && (
                  <select
                    name={paramName}
                    value={params[paramName] as string}  // Cast to string since it's a select input
                    onChange={(e) =>
                      handleParamChange({ [paramName]: e.target.value })
                    }
                  >
                    {paramConfig.options?.map((option) => (
                      <option key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </option>
                    ))}
                  </select>
                )}
              </label>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SynthControlPanel;

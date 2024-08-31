import styled from '@emotion/styled';
import { paramConfig } from './../audio.config';
import { useAudio } from './../hooks/useAudio';

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

const ControlPanel = ({ params, onParamChange, config }) => (
  <div className="control-grid">
    {Object.keys(config).map((section) => (
      <div key={section}>
        <h3>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
        {Object.entries(config[section]).map(([paramName, paramConfig]) => (
          <label key={paramName}>
            {paramConfig.label}:
            {paramConfig.type === 'range' && (
              <input
                type="range"
                name={paramName}
                min={paramConfig.min}
                max={paramConfig.max}
                step={paramConfig.step}
                value={params[paramName]}
                onChange={(e) =>
                  onParamChange({ [paramName]: parseFloat(e.target.value) })
                }
              />
            )}
            {paramConfig.type === 'select' && (
              <select
                name={paramName}
                value={params[paramName]}
                onChange={(e) =>
                  onParamChange({ [paramName]: e.target.value })
                }
              >
                {paramConfig.options.map((option) => (
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
);

const SynthControlPanel = () => {
  const { params, updateParams } = useAudio();

  const handleParamChange = (newParams) => {
    updateParams(newParams);
  };

  return (
    <Container>
      <div className='json'>
        {JSON.stringify(params)}
      </div>
      <ControlPanel 
        params={params} 
        onParamChange={handleParamChange} 
        config={paramConfig} 
      />
    </Container>
  );
};

export default SynthControlPanel;

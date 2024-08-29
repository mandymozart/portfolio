import styled from '@emotion/styled';
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
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
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

const SynthControlPanel = () => {
  const { params, updateParams } = useAudio();

  const handleParamChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    updateParams({ [name]: parseFloat(value) });
  };

  return (
    <Container>
      <div className='json'>
        {JSON.stringify(params)}
      </div>
      <div className="control-grid">
        <div>
          <h3>Synth</h3>
          <label>
            Attack:
            <input
              type="range"
              name="attack"
              min="0"
              max="2"
              step="0.01"
              value={params.attack}
              onChange={handleParamChange}
            />
          </label>
          <label>
            Decay:
            <input
              type="range"
              name="decay"
              min="0"
              max="2"
              step="0.01"
              value={params.decay}
              onChange={handleParamChange}
            />
          </label>
          <label>
            Sustain:
            <input
              type="range"
              name="sustain"
              min="0"
              max="1"
              step="0.01"
              value={params.sustain}
              onChange={handleParamChange}
            />
          </label>
          <label>
            Release:
            <input
              type="range"
              name="release"
              min="0"
              max="10"
              step="0.01"
              value={params.release}
              onChange={handleParamChange}
            />
          </label>
          <label>
            Oscillator Type:
            <select
              name="oscillatorType"
              value={params.oscillatorType}
              onChange={(e) => updateParams({ oscillatorType: e.target.value })}
            >
              <option value="sine">Sine</option>
              <option value="triangle">Triangle</option>
              <option value="square">Square</option>
              <option value="sawtooth">Sawtooth</option>
            </select>
          </label>
        </div>

        <div>
          <h3>Filter</h3>
          <label>
            Filter Frequency:
            <input
              type="range"
              name="filterFrequency"
              min="100"
              max="5000"
              step="1"
              value={params.filterFrequency}
              onChange={handleParamChange}
            />
          </label>
          <label>
            Filter Type:
            <select
              name="filterType"
              value={params.filterType}
              onChange={(e) => updateParams({ filterType: e.target.value })}
            >
              <option value="lowpass">Lowpass</option>
              <option value="highpass">Highpass</option>
              <option value="bandpass">Bandpass</option>
              <option value="notch">Notch</option>
            </select>
          </label>
        </div>

        <div>
          <h3>Reverb</h3>
          <label>
            Reverb Decay:
            <input
              type="range"
              name="reverbDecay"
              min="0.1"
              max="10"
              step="0.1"
              value={params.reverbDecay}
              onChange={handleParamChange}
            />
          </label>
        </div>

        <div>
          <h3>Delay</h3>
          <label>
            Delay Time:
            <input
              type="range"
              name="delayTime"
              min="0.01"
              max="1"
              step="0.01"
              value={params.delayTime}
              onChange={handleParamChange}
            />
          </label>
          <label>
            Delay Feedback:
            <input
              type="range"
              name="delayFeedback"
              min="0"
              max="1"
              step="0.01"
              value={params.delayFeedback}
              onChange={handleParamChange}
            />
          </label>
        </div>
      </div>
    </Container>
  );
};

export default SynthControlPanel;

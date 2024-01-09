import { useEffect, useRef } from 'react';
import * as Tone from 'tone';
import { sameRouteTone } from './../audioConfig';
import { routes } from './../slideInRoutes';

const useMonoSynth = () => {
  const monoSynthRef = useRef<Tone.MonoSynth | null>(null);
  const sequenceRef = useRef<Tone.Sequence | null>(null);

  const playToneAtRoute = (key?: string) => {
    const selectedRoute = Object.values(routes).find(
      route => route.key === key
    );
    const tone = selectedRoute ? selectedRoute.tone : sameRouteTone;

    monoSynthRef.current?.triggerAttackRelease(tone.note, tone.duration);
  };

  /* definitely fucked up instancing */
  const playWalkingSequence = () => {
    Tone.Transport.start();
  };
  const stopWalkingSequence = () => {
    Tone.Transport.stop();
  };

  useEffect(() => {
    monoSynthRef.current = new Tone.MonoSynth().toDestination();

    // Walking sequence
    const notes = ['C2', 'E2', 'G2', 'B2', 'C3', 'B2', 'G2', 'E2'];
    sequenceRef.current = new Tone.Sequence((time, note) => {
      monoSynthRef.current?.triggerAttackRelease(note, '4n', time, 0.1);
    }, notes).start(0);

    return () => {
      // Clean up the MonoSynth instance when the component unmounts
      monoSynthRef.current?.dispose();
      sequenceRef.current?.dispose();
    };
  }, []);

  return {
    monoSynthRef,
    playToneAtRoute,
    playWalkingSequence,
    stopWalkingSequence,
  };
};

export default useMonoSynth;

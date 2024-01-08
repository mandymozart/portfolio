import useGameStore from './../stores/GameStore';

import type { ComponentType, PropsWithChildren } from 'react';
import type { GameStore } from './../stores/GameStore';

type GameStoreKey = keyof GameStore;

export const useToggle =
  <P extends {}>(
    ToggledComponent: ComponentType<P>,
    toggle: GameStoreKey | GameStoreKey[]
  ) =>
  (props: PropsWithChildren<P>) => {
    const keys = Array.isArray(toggle) ? toggle : [toggle];
    const values = useGameStore(state => keys.map(key => state[key]));
    return values.every(v => !!v) ? (
      <ToggledComponent {...props} />
    ) : props.children ? (
      <>{props.children}</>
    ) : null;
  };

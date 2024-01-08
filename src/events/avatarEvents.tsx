/* Based on: https://github.com/etienne-martin/react-event-hook */
import { Vector3 } from '@react-three/fiber';
import { createEvent } from 'react-event-hook';

export enum AvatarEvents {
  MOVE = 'move',
  DANCE = 'dance',
  CHAT = 'chat',
}

/* Agnostic to actual animation mapping */
export enum AvatarActions {
  WALK = 'walk',
  SWIM = 'swim',
  FLY = 'fly',
  RUN = 'run',
  PUSH = 'push',
}

export interface AvatarMove {
  path: Vector3[];
  action?: AvatarActions;
}

export enum AvatarChatMessageType {
  ENTER = 'enter',
  EXIT = 'exit',
}

export interface AvatarChat {
  message: string;
  type: AvatarChatMessageType;
}

export const { useMoveListener, emitMove } = createEvent(
  AvatarEvents.MOVE
)<AvatarMove>();

export const { useDanceListener, emitDance } = createEvent(
  AvatarEvents.DANCE
)();

export const { useChatListener, emitChat } = createEvent(
  AvatarEvents.CHAT
)<AvatarChat>();

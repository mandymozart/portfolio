/* Based on: https://github.com/etienne-martin/react-event-hook */
import { createEvent } from 'react-event-hook';
import { IRoute, IRouteParams } from '../routes';

export enum RouterEvents {
  ROUTE_CHANGE = 'routeChange',
  ROUTE_LOADED = 'routeLoaded',
}

export interface RouteChangeEvent {
  to: IRoute;
  params?: IRouteParams;
}
export interface RouteLoadedEvent {
  to: IRoute;
  params?: IRouteParams;
}

export const { useRouteChangeListener, emitRouteChange } = createEvent(
  RouterEvents.ROUTE_CHANGE,
)<RouteChangeEvent>();

export const { useRouteLoadedListener, emitRouteLoaded } = createEvent(
  RouterEvents.ROUTE_LOADED,
)<RouteLoadedEvent>();

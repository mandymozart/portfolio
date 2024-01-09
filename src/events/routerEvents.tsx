/* Based on: https://github.com/etienne-martin/react-event-hook */
import { createEvent } from 'react-event-hook';
import { SlideInRoute, SlideInRouteParams } from './../slideInRoutes';

export enum RouterEvents {
  ROUTE_CHANGE = 'routeChange',
  ROUTE_LOADED = 'routeLoaded',
}

export interface RouteChangeEvent {
  to: SlideInRoute;
  params?: SlideInRouteParams;
}
export interface RouteLoadedEvent {
  to: SlideInRoute;
  params?: SlideInRouteParams;
}

export const { useRouteChangeListener, emitRouteChange } = createEvent(
  RouterEvents.ROUTE_CHANGE,
)<RouteChangeEvent>();

export const { useRouteLoadedListener, emitRouteLoaded } = createEvent(
  RouterEvents.ROUTE_LOADED,
)<RouteLoadedEvent>();

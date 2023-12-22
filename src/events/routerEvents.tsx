/* Based on: https://github.com/etienne-martin/react-event-hook */
import { SlideInRoute, SlideInRouteParams } from '@/slideInRoutes';
import { createEvent } from 'react-event-hook';

export enum RouterEvents {
  ROUTE_CHANGE = 'routeChange',
}

interface RouteChangeEvent {
  to: SlideInRoute;
  params?: SlideInRouteParams;
}

export const { useRouteChangeListener, emitRouteChange } = createEvent(
  RouterEvents.ROUTE_CHANGE
)<RouteChangeEvent>();

/* Example usage:
emitRouteChange({
  route: slideInRoutes.PROJECT,
  params: { uid: 'resradio-2', lang: 'en-us' },
});
*/

import docs from '../../../data/index.js';
import { ProjectDocument } from "../../../data/types";
import { IRouteKey } from "../../../routes.js";
const projectDocs = docs.projects as ProjectDocument[];
type IPlaybackRange = [from: number, to: number];

export enum WaypointType {
    SLIDE_IN = 'slide-in',
    PROJECT = 'project'
}

export type Waypoint = {
    // id of a slideIn or page
    id: string;
    // 
    type: WaypointType.SLIDE_IN | WaypointType.PROJECT;
    // define where to scroll through the timeline
    position: number;
    // use this to adjust the speed that this is happening with
    // 1 is normal speed.
    rate: number;
}

type IPlaybackDirection = 'normal' | 'reverse' | 'alternate' | 'alternateReverse';
export const getDirection = (prev:Waypoint,next:Waypoint):IPlaybackDirection => prev.position > next.position ? 'normal':'reverse'

const accumulateWaypoints = (): Waypoint[] => {
    // Create a Set from the SlideInRouteName enum values
    const slideIns = new Set(
        Object.values(IRouteKey).map((key) => ({
            id: key,
            type: WaypointType.SLIDE_IN,
            position: 0, // Assuming default frameNumber as 0, adjust as needed
            rate: 1, // Assuming default speed as 1, adjust as needed
        }))
    );

    // Create a Set from the ProjectDocument data
    const projects = new Set(
        projectDocs.map((project) => ({
            id: project.uid,
            type: WaypointType.PROJECT,
            position: 0, // Assuming default frameNumber as 0, adjust as needed
            rate: 1, // Assuming default speed as 1, adjust as needed
        }))
    );

    // Merge the two sets into a new array
    const accumulatedWaypoints: Waypoint[] = [
        ...slideIns,
        ...projects,
    ];

    return accumulatedWaypoints;
};

const waypoints: Waypoint[] = [
  { id: "home", type: WaypointType.SLIDE_IN, position: 0, rate: 1 },
  { id: "privacy", type: WaypointType.SLIDE_IN, position: 0, rate: 1 },
  { id: "imprint", type: WaypointType.SLIDE_IN, position: 0, rate: 1 },
  { id: "process", type: WaypointType.SLIDE_IN, position: 0, rate: 1 },
  { id: "projects", type: WaypointType.SLIDE_IN, position: 0, rate: 1 },
  { id: "attributions", type: WaypointType.SLIDE_IN, position: 0, rate: 1 },
  { id: "about", type: WaypointType.SLIDE_IN, position: 0, rate: 1 },
  { id: "project", type: WaypointType.SLIDE_IN, position: 0, rate: 1 },
  { id: "resradio-2", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "collisions-munich", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "edmt", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "lagerhaus", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "fourth-garden", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "liah", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "swma", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "rwa-emails", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "naivesandvisionaries", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "rwa-shop", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "dogheartcity", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "muriquee", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "shalomsalon", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "business-riot-conference", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "mirror-head", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "collisions-canfranc", type: WaypointType.PROJECT, position: 0, rate: 1 },
  { id: "resradio-1", type: WaypointType.PROJECT, position: 0, rate: 1 }
];

  
export const accumulatedWaypoints: Waypoint[] = accumulateWaypoints();

export default waypoints;
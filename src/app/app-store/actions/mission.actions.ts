import {Action, createAction, props} from '@ngrx/store';
import {ObservationMission} from '../../model/mission/observation-mission';
import {Update} from '@ngrx/entity';


export enum MissionActionTypes {
  MISSION_REQUESTED = '[View Mission Page] Mission Requested',
  MISSION_LOADED = '[Missions API] Mission Loaded',
  ALL_MISSIONS_REQUESTED = '[Missions Home Page] All Missions Requested',
  ALL_MISSIONS_LOADED = '[Missions API] All Missions Loaded',
  MISSION_SAVED = '[Edit Mission Dialog] Mission Saved'
}


export class MissionRequested implements Action {

  readonly type = MissionActionTypes.MISSION_REQUESTED;

  constructor(public payload: { missionId: number }) {

  }
}


export class MissionLoaded implements Action {

  readonly type = MissionActionTypes.MISSION_LOADED;

  constructor(public payload: { mission: ObservationMission }) {
  }
}


export class AllMissionsRequested implements Action {

  readonly type = MissionActionTypes.ALL_MISSIONS_REQUESTED;

}

export class AllMissionsLoaded implements Action {

  readonly type = MissionActionTypes.ALL_MISSIONS_LOADED;

  constructor(public payload: { missions: ObservationMission[] }) {

  }

}

export class MissionSaved implements Action {

  readonly type = MissionActionTypes.MISSION_SAVED;

  constructor(public payload: { mission: Update<ObservationMission> }) {}
}




export type MissionActions =
  MissionRequested
  | MissionLoaded
  | AllMissionsRequested
  | AllMissionsLoaded
  | MissionSaved;

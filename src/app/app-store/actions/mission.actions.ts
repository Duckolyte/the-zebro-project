import {Action, createAction, props} from '@ngrx/store';
import {ObservationMission} from '../../model/mission/observation-mission';
import {Update} from '@ngrx/entity';


export enum MissionActionTypes {
  MISSION_REQUESTED = '[View Mission Page] Mission Requested',
  MISSION_LOADED = '[Missions API] Mission Loaded',
  ALL_MISSIONS_REQUESTED = '[Missions Home Page] All Missions Requested',
  ALL_MISSIONS_LOADED = '[Missions API] All Missions Loaded',
  MISSION_SAVED = '[Edit Mission Dialog] Mission Saved',
  MISSION_SELECT = '[Edit Mission Dialog] Mission Select',
  MISSION_ADD = '[Edit Mission Dialog] Mission Add',
  MISSION_DELETE = '[Edit Mission Dialog] Mission Delete',
  MISSION_UPDATE = '[Edit Mission Dialog] Mission Update'
}


export class MissionRequested implements Action {

  readonly type = MissionActionTypes.MISSION_REQUESTED;

  constructor(public payload: { missionId: number }) {}
}


export class MissionLoaded implements Action {

  readonly type = MissionActionTypes.MISSION_LOADED;

  constructor(public payload: { mission: ObservationMission }) {}
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

export class MissionSelect implements Action {

  readonly type = MissionActionTypes.MISSION_SELECT;

  constructor(public payload: { mission: Update<ObservationMission> }) {}
}


export class MissionAdd implements Action {

  readonly type = MissionActionTypes.MISSION_ADD;

  constructor(public payload: { mission: ObservationMission }) {}
}

export class MissionDelete implements Action {

  readonly type = MissionActionTypes.MISSION_DELETE;

  constructor(public payload: { missionId: string }) {}
}

export class MissionUpdate implements Action {

  readonly type = MissionActionTypes.MISSION_UPDATE;

  constructor(public payload: { mission: Update<ObservationMission> }) {}
}


export type MissionActions =
  MissionRequested
  | MissionLoaded
  | AllMissionsRequested
  | AllMissionsLoaded
  | MissionSaved
  | MissionSelect
  | MissionAdd
  | MissionDelete
  | MissionUpdate;

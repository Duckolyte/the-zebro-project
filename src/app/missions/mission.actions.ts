import {Action} from '@ngrx/store';
import {ObservationMission} from './model/observation-mission';

export enum MissionActionTypes {
  CREATE_MISSION = '[Mission] Create',
  UPDATE_MISSION = '[Mission] Update',
  DELETE_MISSION = '[Mission] Delete'
}

export class CreateMission implements Action {
  readonly type = MissionActionTypes.CREATE_MISSION;
  constructor(public mission: ObservationMission) {}
}

export class UpdateMission implements Action {
  readonly type = MissionActionTypes.UPDATE_MISSION;
  constructor(
      public id: string,
      public changes: Partial<ObservationMission>
  ) {}
}

export class DeleteMission implements Action {
  readonly type = MissionActionTypes.DELETE_MISSION;
  constructor(public id: string) {}
}

export type MissionActions =
  CreateMission |
  UpdateMission |
  DeleteMission;

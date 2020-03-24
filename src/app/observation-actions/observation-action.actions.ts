import { Action } from '@ngrx/store';
import {ObservationAction} from './model/observation-action';

export enum ObservationActionTypes {
  CREATE_OBSERVATION = '[ObservationAction] Create',
  UPDATE_OBSERVATION = '[ObservationAction] Update',
  DELETE_OBSERVATION = '[ObservationAction] Delete'
}

export class CreateObservation implements Action {
  readonly type = ObservationActionTypes.CREATE_OBSERVATION;
  constructor(public observation: ObservationAction) {}
}

export class UpdateObservation implements Action {
  readonly type = ObservationActionTypes.UPDATE_OBSERVATION;
  constructor(
    public id: string,
    public changes: Partial<ObservationAction>
  ) {}
}

export class DeleteObservation implements Action {
  readonly type = ObservationActionTypes.DELETE_OBSERVATION;
  constructor(public id: string) {}
}

export type ObservationActions =
  CreateObservation |
  UpdateObservation |
  DeleteObservation;

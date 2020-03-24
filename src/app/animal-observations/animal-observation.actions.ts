import { Action } from '@ngrx/store';
import {AnimalObservation} from './model/animal-observation';

export enum AnimalObservationActionTypes {
  CREATE_ANIMAL_OBSERVATION = '[Animal Observation] Create',
  UPDATE_ANIMAL_OBSERVATION = '[Animal Observation] Update',
  DELETE_ANIMAL_OBSERVATION = '[Animal Observation] Delete'
}

export class CreateAnimalObservation implements Action {
  readonly type = AnimalObservationActionTypes.CREATE_ANIMAL_OBSERVATION;
  constructor(public animalObservation: AnimalObservation) {}
}

export class UpdateAnimalObservation implements Action {
  readonly type = AnimalObservationActionTypes.UPDATE_ANIMAL_OBSERVATION;
  constructor(
    public id: string,
    public changes: Partial<AnimalObservation>
  ) {}
}

export class DeleteAnimalObservation implements Action {
  readonly type = AnimalObservationActionTypes.DELETE_ANIMAL_OBSERVATION;
  constructor(public id: string) {}
}

export type AnimalObservationActions =
  CreateAnimalObservation |
  UpdateAnimalObservation |
  DeleteAnimalObservation;

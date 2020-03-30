import { createEntityAdapter, EntityState} from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

import * as actions from './animal-observation.actions';
import {AnimalObservation} from './model/animal-observation';

export const animalObservationAdapter = createEntityAdapter<AnimalObservation>();

export interface State extends EntityState<AnimalObservation> {
}

export const initialState: State = animalObservationAdapter.getInitialState();

export function animalObservationReducer(
  state: State = initialState,
  action: actions.AnimalObservationActions
) {

  switch (action.type) {

    case actions.AnimalObservationActionTypes.CREATE_ANIMAL_OBSERVATION:
      return animalObservationAdapter.addOne(action.animalObservation, state);

    case actions.AnimalObservationActionTypes.UPDATE_ANIMAL_OBSERVATION:
      return animalObservationAdapter.updateOne(
        {
          id: action.id,
          changes: action.changes
        },
        state
      );

    case actions.AnimalObservationActionTypes.DELETE_ANIMAL_OBSERVATION:
      return animalObservationAdapter.removeOne(action.id, state);

    default:
      return state;
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = animalObservationAdapter.getSelectors();

/*
export const getAnimalObservationState = createFeatureSelector<State>('animalObservation');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = animalObservationAdapter.getSelectors(getAnimalObservationState);
 */


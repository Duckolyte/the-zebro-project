import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromAnimalObservation from './animal-observation.reducers';


export const getAnimalObservationState = createFeatureSelector<fromAnimalObservation.State>('animalObservations');

export const selectAnimalObservationById = (animalObservationId: string) => createSelector(
  getAnimalObservationState,
  animalObservationState => animalObservationState.entities[animalObservationId]
);

export const selectFirstAnimalObservation = createSelector(
  getAnimalObservationState,
  animalObservationState => animalObservationState.entities[animalObservationState.ids[0]]
);

export const selectAllAnimalObservations = createSelector(
  getAnimalObservationState,
  fromAnimalObservation.selectAll
);

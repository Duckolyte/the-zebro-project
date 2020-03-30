import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromObservation from '../observation-actions/observation-action.reducers';

export const getObservationState = createFeatureSelector<fromObservation.State>('observations');


export const selectObservationById = (observationId: string) => createSelector(
  getObservationState,
  observationState => observationState.entities[observationId]
);

export const selectLatestObservation = createSelector(
  getObservationState,
  observationState => observationState.entities[observationState.ids[0]]
);

export const selectAllObservations = createSelector(
  getObservationState,
  fromObservation.selectAll
);

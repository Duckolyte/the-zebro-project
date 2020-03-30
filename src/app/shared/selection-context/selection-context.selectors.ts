import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromSelectionContext from './selection-context.reducers';

export const getSelectionContextState = createFeatureSelector<fromSelectionContext.State>('selections');

export const selectSelectionContext = createSelector(
  getSelectionContextState,
  fromSelectionContext.selectAll
);


export const selectActiveMissionId = () => createSelector(
  getSelectionContextState,
  selectionContextState => selectionContextState.entities[selectionContextState.ids[0]].selectedMissionId
);

export const selectActiveObservationId = createSelector(
  getSelectionContextState,
  selectionContextState => selectionContextState.entities[selectionContextState.ids[0]].selectedObservationId
);

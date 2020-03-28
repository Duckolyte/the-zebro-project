import { createEntityAdapter, EntityState} from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

import * as actions from './observation-action.actions';
import {ObservationAction} from './model/observation-action';

export const observationAdapter = createEntityAdapter<ObservationAction>();

export interface State extends EntityState<ObservationAction> {
}

export const initialState: State = observationAdapter.getInitialState();

export function observationReducer(
  state: State = initialState,
  action: actions.ObservationActions
) {

  switch (action.type) {

    case actions.ObservationActionTypes.CREATE_OBSERVATION:
      return observationAdapter.addOne(action.observation, state);

    case actions.ObservationActionTypes.UPDATE_OBSERVATION:
      return observationAdapter.updateOne(
        {
          id: action.id,
          changes: action.changes
        },
        state
      );

    case actions.ObservationActionTypes.DELETE_OBSERVATION:
      return observationAdapter.removeOne(action.id, state);

    default:
      return state;
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = observationAdapter.getSelectors();

/*
export const getObservationState = createFeatureSelector<State>('observation');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = observationAdapter.getSelectors(getObservationState);
*/



import { createEntityAdapter, EntityState} from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

import {SelectionContext} from '../model/common/selection-context';
import * as fromSelectionContext from './selection-context.actions';


export const selectionContextAdapter = createEntityAdapter<SelectionContext>();

export interface State extends EntityState<SelectionContext> {}

export const initialState: State = selectionContextAdapter.getInitialState();

export function selectionReducer(
  state: State = initialState,
  action: fromSelectionContext.SelectionContextActions
) {

  switch (action.type) {

    case fromSelectionContext.SelectionContextActionTypes.CREATE_CONTEXT:
      return selectionContextAdapter.addOne(action.context, state);

    case fromSelectionContext.SelectionContextActionTypes.UPDATE_CONTEXT:
      return selectionContextAdapter.updateOne(
        {
          id: action.id,
          changes: action.changes
        },
        state
      );

    case fromSelectionContext.SelectionContextActionTypes.DELETE_CONTEXT:
      return selectionContextAdapter.removeOne(action.id, state);

    default:
      return state;
  }
}

export const getSelectionContextState = createFeatureSelector<State>('selection');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = selectionContextAdapter.getSelectors(getSelectionContextState);




/*
export interface SelectionContextState {
  context: SelectionContext;
}

export const initialState = {
  context: {
    selectedObservationMissionId: undefined,
    selectedAnimalObservationId: undefined
  }
};

export function selectionContextReducer(
  state = initialState,
  action: fromSelectionContext.SelectionContextAction
): SelectionContextState {
  switch (action.type) {
    case fromSelectionContext.SelectionContextActionTypes.CREATE_CONTEXT:
      return
    case fromSelectionContext.SelectionContextActionTypes.UPDATE_CONTEXT:
      return
    case fromSelectionContext.SelectionContextActionTypes.DELETE_CONTEXT:
      return
    default
      return state;
  }
}
*/

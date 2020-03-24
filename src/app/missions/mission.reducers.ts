import { createEntityAdapter, EntityState} from '@ngrx/entity';
import { ObservationMission } from './model/observation-mission';
import { createFeatureSelector } from '@ngrx/store';

import * as actions from './mission.actions';

export const missionAdapter = createEntityAdapter<ObservationMission>();

export interface State extends EntityState<ObservationMission> {
}

export const initialState: State = missionAdapter.getInitialState();

export function missionReducer(
  state: State = initialState,
  action: actions.MissionActions
) {

  switch (action.type) {

    case actions.MissionActionTypes.CREATE_MISSION:
      return missionAdapter.addOne(action.mission, state);

    case actions.MissionActionTypes.UPDATE_MISSION:
      return missionAdapter.updateOne(
        {
          id: action.id,
          changes: action.changes
        },
        state
      );

    case actions.MissionActionTypes.DELETE_MISSION:
      return missionAdapter.removeOne(action.id, state);

    default:
      return state;
  }
}

export const getMissionState = createFeatureSelector<State>('mission');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = missionAdapter.getSelectors(getMissionState);



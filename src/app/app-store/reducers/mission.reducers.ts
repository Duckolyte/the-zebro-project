import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {MissionActions, MissionActionTypes} from '../actions/mission.actions';
import {ObservationMission} from '../../model/mission/observation-mission';


export interface MissionsState extends EntityState<ObservationMission> {
  allMissionsLoaded: boolean;
  selectedMissionId: string;
}

export const adapter: EntityAdapter<ObservationMission> =
  createEntityAdapter<ObservationMission>();


export const initialMissionsState: MissionsState = adapter.getInitialState({
  allMissionsLoaded: false,
  selectedMissionId: undefined
});

export function missionsReducer(state = initialMissionsState , action: MissionActions): MissionsState {

  switch (action.type) {

    case MissionActionTypes.MISSION_LOADED:
      return adapter.addOne(action.payload.mission, state);

    case MissionActionTypes.ALL_MISSIONS_LOADED:
      return adapter.addAll(action.payload.missions, {...state, allMissionsLoaded: true});

    case MissionActionTypes.MISSION_SAVED:
      return adapter.updateOne(action.payload.mission, state);

    case MissionActionTypes.MISSION_SELECT:
      return adapter.updateOne(action.payload.missionId, { ...state, selectedMissionId: action.payload.missionId});

    case MissionActionTypes.MISSION_ADD:
      return adapter.addOne(action.payload.mission, state);

    case MissionActionTypes.MISSION_DELETE:
      return adapter.removeOne(action.payload.missionId, state);

    case MissionActionTypes.MISSION_UPDATE:
      return adapter.updateOne(action.payload.mission, state);

    default: {
      return state;
    }

  }
}


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();

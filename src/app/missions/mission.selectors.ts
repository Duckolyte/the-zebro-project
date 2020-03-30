import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromMission from './mission.reducers';

export const getMissionState = createFeatureSelector<fromMission.State>('missions');


export const selectMissionById = (missionId: string) => createSelector(
  getMissionState,
  missionsState => missionsState.entities[missionId]
);

export const selectLatestMission = createSelector(
  getMissionState,
  missionsState => missionsState.entities[missionsState.ids[0]]
);

export const selectAllMissions = createSelector(
  getMissionState,
  fromMission.selectAll
);

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MissionsState} from '../reducers/mission.reducers';
import * as fromMission from '../reducers/mission.reducers';

export const selectMissionsState = createFeatureSelector<MissionsState>('missions');

export const selectMissionById = (missionId: string) => createSelector(
  selectMissionsState,
  missionsState => missionsState.entities[missionId]
);

export const selectAllMissions = createSelector(
  selectMissionsState,
  fromMission.selectAll
);

export const allMissionsLoaded = createSelector(
  selectMissionsState,
  missionsState => missionsState.allMissionsLoaded
);

/*
TODO an example of a filtered selector
export const selectBeginnerCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category === 'BEGINNER')
);
*/

/*
{
  missions:{
      ids: ['abc']
      entities: [                        <-------- this is selectMissionState
        {
          id: 'abc'
          misisonId: number,
          someprops: some
        }
      ],
        allMissionsLoaded: boolean
}
*/

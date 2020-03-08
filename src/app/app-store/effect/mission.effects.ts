import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  AllMissionsLoaded,
  AllMissionsRequested,
  MissionActionTypes,
  MissionLoaded,
  MissionRequested
} from '../actions/mission.actions';
import {throwError, of} from 'rxjs';
import {catchError, concatMap, exhaustMap, filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {ObservationMissionService} from '../../service/observation-mission.service';
import {AppState} from '../index';
import {select, Store} from '@ngrx/store';
import {allMissionsLoaded} from '../selector/mission.selectors';

@Injectable()
export class CourseEffects {

  @Effect()
  loadCourse$ = this.actions$
    .pipe(
      ofType<MissionRequested>(MissionActionTypes.MISSION_REQUESTED),
      mergeMap(action => this.observationMissionService.findMissionById(action.payload.missionId)),
      map(mission => new MissionLoaded({mission}))
    );

  @Effect()
  loadAllCourses$ = this.actions$
    .pipe(
      ofType<AllMissionsLoaded>(MissionActionTypes.ALL_MISSIONS_REQUESTED),
      withLatestFrom(this.store.pipe(select(allMissionsLoaded))),
      filter(([action, allMissionsLoaded]) => !allMissionsLoaded),
      mergeMap(() => this.observationMissionService.findAllMissions()),
      map(missions => new AllMissionsLoaded({missions}))
    );


  constructor(private actions$: Actions, private observationMissionService: ObservationMissionService,
              private store: Store<AppState>) {

  }

}

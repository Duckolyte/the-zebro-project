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
import {CoursesService} from './services/courses.service';
import {AppState} from '../reducers';
import {select, Store} from '@ngrx/store';
import {allMissionsLoaded} from '../selector/mission.selectors';

@Injectable()
export class CourseEffects {

  @Effect()
  loadCourse$ = this.actions$
    .pipe(
      ofType<MissionRequested>(MissionActionTypes.MISSION_REQUESTED),
      mergeMap(action => this.missionService.findMissionById(action.payload.missionId)),
      map(mission => new MissionLoaded({mission}))

    );

  @Effect()
  loadAllCourses$ = this.actions$
    .pipe(
      ofType<AllCoursesRequested>(CourseActionTypes.AllCoursesRequested),
      withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
      filter(([action, allCoursesLoaded]) => !allCoursesLoaded),
      mergeMap(() => this.coursesService.findAllCourses()),
      map(courses => new AllCoursesLoaded({courses}))
    );


  constructor(private actions$: Actions, private coursesService: CoursesService,
              private store: Store<AppState>) {

  }

}

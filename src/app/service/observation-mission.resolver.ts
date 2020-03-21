import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, first, tap} from 'rxjs/operators';
import {ObservationMission} from '../model/mission/observation-mission';
import {selectMissionById} from '../app-store/selector';
import {MissionRequested} from '../app-store/actions';
import {ObservationMissionService} from './observation-mission.service';
import {AppState} from '../app-store';


@Injectable()
export class MissionResolver implements Resolve<ObservationMission> {

  constructor(
    private coursesService: ObservationMissionService,
    private store: Store<AppState>) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ObservationMission> {
    const missionId = route.params['id'];

    return this.store.pipe(
      select(selectMissionById(missionId)),
      tap(mission => {
        if (!mission) {
          this.store.dispatch(new MissionRequested({missionId}));
        }
      }),
      filter(mission => !!mission),
      first());
  }

}


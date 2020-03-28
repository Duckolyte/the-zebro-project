import {Component, OnInit} from '@angular/core';
import {ObservationQualityCode} from '../model/observation-quality-code.enum';
import {ObservationAction} from '../model/observation-action';
import {NavigationService} from '../../shared/service/navigation.service';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../shared/app-store';
import {CreateObservation} from '../observation-action.actions';
import {v4 as uuid} from 'uuid';
import {selectionContextAdapter} from '../../shared/selection-context/selection-context.reducers';
import {first, tap} from 'rxjs/operators';
import * as fromMissionsReducers from '../../missions/mission.reducers';
import * as fromMissionsSelectors from '../../missions/mission.selectors';
import {AnimalObservation} from '../../animal-observations/model/animal-observation';
import {ObservationMission} from '../../missions/model/observation-mission';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observation-action',
  templateUrl: './observation-action.component.html',
  styleUrls: ['./observation-action.component.css']
})
export class ObservationActionComponent implements OnInit {

  // UI configuration
  private observationQualityCodeToggleButtonGroup = {
    nestedButtons: [
      {value: ObservationQualityCode[0]},
      {value: ObservationQualityCode[1]},
      {value: ObservationQualityCode[2]},
      {value: ObservationQualityCode[3]},
    ]
  };
  private commitObservationActionButton = {
    buttonType: 'RedirectionButton',
    buttonProps: {
      url: 'mission'
    }
  };

  // Component properties
  private observationAction: ObservationAction;
  private observations: AnimalObservation[];

  // TODO remove
  dummyActiveMission$: Observable<ObservationMission[]> =  this.store.pipe(select(fromMissionsSelectors.selectAllMissions));

  constructor(
    private navigationService: NavigationService,
    private store: Store<fromMissionsReducers.State>
  ) {
  }

  ngOnInit() {
    // @TODO
    // Load observations by Id.
    this.observations = [];
    // @TODO
    // Here should select via the selection context.
    // Because else mixin feature depenecies.
    // And because the observationAction needs to be created already when enter the page animal-observation.component.
    this.dummyActiveMission$.subscribe(currentPizzas => {
      // This function is called everytime your state changes + initial state
      console.log(currentPizzas); // This logs your current pizza state
    });
    this.observationAction = new ObservationAction(
      uuid(),
      '1'
    );
  }

  commitObservationAction() {
    this.store.dispatch(new CreateObservation(this.observationAction));
    this.navigationService.navigateTo('mission');
  }
}

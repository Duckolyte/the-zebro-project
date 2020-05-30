import {Component, OnInit} from '@angular/core';
import {ObservationQualityCode} from '../model/observation-quality-code.enum';
import {ObservationAction} from '../model/observation-action';
import {NavigationService} from '../../shared/service/navigation.service';
import {select, Store} from '@ngrx/store';
import {UpdateObservation} from '../observation-action.actions';
import * as fromMissionsReducers from '../../missions/mission.reducers';
import * as fromSelectionContext from '../../shared/selection-context/selection-context.selectors';
import {AnimalObservation} from '../../animal-observations/model/animal-observation';
import {Observable} from 'rxjs';
import {SelectionContext} from '../../shared/model/common/selection-context';
import * as fromObservationAction from '../../observation-actions/observation-action.selectors';
import * as fromAnimalObservation from '../../animal-observations/animal-observation.selectors';
import {GpsPoint} from '../../shared/model/common/gps-point';

@Component({
  selector: 'app-observation-action',
  templateUrl: './observation-action.component.html',
  styleUrls: ['./observation-action.component.css']
})
export class ObservationActionComponent implements OnInit {

  // UI configuration
  private observationQualityCodeToggleButtonGroup = {
    nestedButtons: [
      {value: ObservationQualityCode.A},
      {value: ObservationQualityCode.B},
      {value: ObservationQualityCode.C},
      {value: ObservationQualityCode.D},
    ]
  };
  private commitObservationActionButton = {
    buttonType: 'RedirectionButton',
    buttonProps: {
      url: 'mission'
    }
  };

  // Component properties
  private observationAction$: Observable<ObservationAction>;
  private observationAction: ObservationAction;

  private observations$: Observable<AnimalObservation[]>;
  private observations: AnimalObservation[];
  private observationsCount: number;

  private gps: GpsPoint;

  selectionContext$: Observable<SelectionContext[]> = this.store.pipe(select(fromSelectionContext.selectSelectionContext));
  private selectedObservationId;

  constructor(
    private navigationService: NavigationService,
    private store: Store<fromMissionsReducers.State>
  ) {
  }

  ngOnInit() {
    this.selectionContext$.subscribe(selectionContext => {
      this.selectedObservationId = selectionContext[0].selectedObservationId;
    });

    this.observationAction$ = this.store.pipe(select(fromObservationAction.selectObservationById(this.selectedObservationId)));
    this.observationAction$.subscribe(observation => {
      this.observationAction = Object.assign({}, observation);
    });

    this.observationAction$.subscribe(observation => {
      this.gps = Object.assign({}, observation.gps);
    });

    this.observations$ = this.store.pipe(select(fromAnimalObservation.selectAllAnimalObservations));
    this.observations$.subscribe(observations => {
      this.observations = Object.assign({}, observations);
    });
    if (this.observations) {
      this.observationsCount = Object.keys(this.observations).length;
    }
  }

  commitObservationAction() {
    this.observationAction.gps = this.gps;
    this.store.dispatch(new UpdateObservation(this.observationAction.id, this.observationAction));
    this.navigationService.navigateTo('mission');
  }
}

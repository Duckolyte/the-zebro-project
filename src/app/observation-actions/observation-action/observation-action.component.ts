import {Component, OnInit} from '@angular/core';
import {ObservationQualityCode} from '../model/observation-quality-code.enum';
import {ObservationAction} from '../model/observation-action';
import {NavigationService} from '../../shared/service/navigation.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../shared/app-store';
import {CreateObservation} from '../observation-action.actions';

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

  constructor(
    private navigationService: NavigationService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.observationAction = new ObservationAction();
  }

  commitObservationAction() {
    this.store.dispatch(new CreateObservation(this.observationAction));
    this.navigationService.navigateTo('mission');
  }
}

import {Component, OnInit} from '@angular/core';
import {ObservationQualityCode} from '../../../model/observation/observation-quality-code.enum';
import {ObservationAction} from '../../../model/observation/observation-action';
import {NavigationService} from '../../../service/navigation.service';

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
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.observationAction = new ObservationAction();
  }

  commitObservationAction() {
    // @TODO
    // Store the observation action to the selected mission.
    this.navigationService.navigateTo('mission');
  }
}

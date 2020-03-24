import {Component, OnInit} from '@angular/core';
import {ObservationMission} from '../model/observation-mission';
import {NavigationService} from '../../shared/service/navigation.service';
import {ParcSection} from '../model/parc-section';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../shared/app-store';
import {ActivatedRoute} from '@angular/router';
import { v4 as uuid } from 'uuid';

import {CreateMission} from '../mission.actions';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  // UI configuration
  private parcSectionToggleButtonGroup = {
    nestedButtons: [
      {value: ParcSection.H},
      {value: ParcSection.M}
    ]
  };
  private commitMissionButton = {
    buttonType: 'RedirectionButton',
    buttonProps: {
      url: 'mission'
    }
  };
  private createObservationButton = {
    buttonType: 'RedirectionButton',
    buttonProps: {
      url: 'animal-observation'
    }
  };

  // Component properties
  private observationMission: ObservationMission;

  constructor(
    private navigationService: NavigationService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.observationMission = this.route.snapshot.data.mission;
    if (!this.observationMission){
      this.observationMission = new ObservationMission(
        uuid()
      );
    }
  }

  leaveMission(): void {
    this.navigationService.navigateTo('mission');
  }

  startObserving(): void {
    this.store.dispatch(new CreateMission(this.observationMission));
    this.navigationService.navigateTo('animal-observation');
  }


}

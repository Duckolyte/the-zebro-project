import {Component, OnInit} from '@angular/core';
import {ObservationMission} from '../model/observation-mission';
import {NavigationService} from '../../shared/service/navigation.service';
import {ParcSection} from '../model/parc-section';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../shared/app-store';
import {ActivatedRoute} from '@angular/router';
import {MissionAdd, MissionSelect} from '../../shared/app-store/actions';

import * as actions from '../mission.actions';
import * as fromMission from '../mission.reducers';
import {CreateMission} from '../mission.actions';
import {UpdateSelectionContext} from '../../shared/selection-context/selection-context.actions';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  // UI configuration
  private parcSectionToggleButtonGroup = {
    nestedButtons: [
      {value: ParcSection[0]},
      {value: ParcSection[1]}
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
      this.observationMission = new ObservationMission();
    }
  }

  commitMission(): void {
    this.store.dispatch(new CreateMission(this.observationMission));
  }

  startObserving(): void {
    this.navigationService.navigateTo('animal-observation');
  }


}

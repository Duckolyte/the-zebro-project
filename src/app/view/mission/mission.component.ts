import {Component, OnInit} from '@angular/core';
import {ObservationMission} from '../../model/mission/observation-mission';
import {NavigationService} from '../../service/navigation.service';
import {ObservationMissionService} from '../../service/observation-mission.service';
import {ParcSection} from '../../model/mission/parc-section';

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
    private observationMissionService: ObservationMissionService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    // const missionId = url.part.id;
    // this.observationMission = this.observationMissionService.findObservationMissionById(missionId);
    const dummyObservationMission = this.observationMissionService.getSelectedMission();
    if (dummyObservationMission) {
      this.observationMission = dummyObservationMission;
    }
    this.observationMission = this.observationMissionService.createObservationMission();
  }

  commitMission(): void {
    const missionCommited = this.observationMissionService.storeObservationMission(this.observationMission);
    if (missionCommited) {
      // @TODO create toast with succesful or failed message
    }
  }

  startObserving(): void {
    console.log('ObservationMission object before redirect to animal-observation:');
    console.log(this.observationMission);

    this.navigationService.navigateTo('animal-observation');
  }



}

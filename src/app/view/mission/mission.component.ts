import {Component, OnInit} from '@angular/core';
import {ObservationMission} from '../../model/mission/observation-mission';
import {NavigationService} from '../../service/navigation.service';
import {ParcSection} from '../../model/mission/parc-section';
import {Observable, of} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../app-store';
import {ActivatedRoute} from '@angular/router';
import {MissionAdd} from '../../app-store/actions';
import {selectMissionById} from '../../app-store/selector';

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
  private loading$: Observable<boolean>;
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
    console.log(this.observationMission);
    this.store.dispatch(new MissionAdd({ mission: this.observationMission }));
  }

  startObserving(): void {
    console.log('ObservationMission object before redirect to animal-observation:');
    console.log(this.observationMission);
    this.navigationService.navigateTo('animal-observation');
  }


}

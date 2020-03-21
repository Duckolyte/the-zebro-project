import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../service/navigation.service';
import { MatSnackBar } from '@angular/material';
import {Observable} from 'rxjs';
import {ObservationMission} from '../../model/mission/observation-mission';
import {ObservationAction} from '../../model/observation/observation-action';
import {AnimalObservation} from '../../model/observation/animal-observation';
import {AppState} from '../../app-store';
import {select, Store} from '@ngrx/store';
import {AllMissionsRequested} from '../../app-store/actions';
import {selectAllMissions} from '../../app-store/selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // UI configuration
  private startMissionButton = {
    buttonType: 'RedirectionButton',
    buttonProps: {
      url: 'mission'
    }
  };

  // Component properties
  private allObservationMissions: Observable<ObservationMission[]>;
  private allObservationActions: Observable<ObservationAction[]>;
  private allAnimalObservations: Observable<AnimalObservation[]>;

  constructor(
    private store: Store<AppState>,
    private navigationService: NavigationService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.store.dispatch(new AllMissionsRequested());

    this.allObservationMissions = this.store.pipe(select(selectAllMissions));
  }

  showMissions() {
    this.snackBar.open('The feature is no supported yet.', 'Feature', { duration: 2000 });
  }

  startMission() {
    this.navigationService.navigateTo(this.startMissionButton.buttonProps.url);
  }
}

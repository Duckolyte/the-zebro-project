import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../shared/service/navigation.service';
import { MatSnackBar } from '@angular/material';
import {Observable} from 'rxjs';
import {ObservationMission} from '../model/observation-mission';
import {ObservationAction} from '../../observation-actions/model/observation-action';
import {AnimalObservation} from '../../animal-observations/model/animal-observation';
import {AppState} from '../../shared/app-store';
import {select, Store} from '@ngrx/store';
import {AllMissionsRequested} from '../../shared/app-store/actions';
import {selectAllMissions} from '../../shared/app-store/selector';
import {CreateSelectionContext} from '../../shared/selection-context/selection-context.actions';
import { v4 as uuid } from 'uuid';
import {SelectionContext} from '../../shared/model/common/selection-context';

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

    const selectionContext: SelectionContext = {
      id: '1',
      selectedMissionId: '',
      selectedObservationId: ''
    }
    this.store.dispatch(new CreateSelectionContext(selectionContext));

    this.allObservationMissions = this.store.pipe(select(selectAllMissions));
  }

  showMissions() {
    this.snackBar.open('The feature is no supported yet.', 'Feature', { duration: 2000 });
  }

  startMission() {
    this.navigationService.navigateTo(this.startMissionButton.buttonProps.url);
  }
}

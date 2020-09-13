import {Component, OnInit} from '@angular/core';
import {ObservationMission} from '../model/observation-mission';
import {NavigationService} from '../../shared/service/navigation.service';
import {ParcSection} from '../model/parc-section';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../shared/app-store';
import {ActivatedRoute} from '@angular/router';
import {v4 as uuid} from 'uuid';

import {CreateMission, UpdateMission} from '../mission.actions';
import {UpdateSelectionContext} from '../../shared/selection-context/selection-context.actions';
import * as fromMissions from '../mission.selectors';
import {Observable} from 'rxjs';
import {SelectionContext} from '../../shared/model/common/selection-context';
import * as fromSelectionContext from '../../shared/selection-context/selection-context.selectors';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  // UI configuration
  parcSectionToggleButtonGroup = {
    nestedButtons: [
      {value: ParcSection.H},
      {value: ParcSection.M}
    ]
  };
  commitMissionButton = {
    buttonType: 'RedirectionButton',
    buttonProps: {
      url: 'mission'
    }
  };
  createObservationButton = {
    buttonType: 'RedirectionButton',
    buttonProps: {
      url: 'animal-observation'
    }
  };

  // Component properties
  private observationMission$: Observable<ObservationMission>;
  observationMission: ObservationMission;
  private selectionContext$: Observable<SelectionContext[]> = this.store.pipe(select(fromSelectionContext.selectSelectionContext));
  selectedMissionId: string;

  constructor(
    private navigationService: NavigationService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {

    this.selectionContext$.subscribe(selectionContext => {
      this.selectedMissionId = selectionContext[0] ? selectionContext[0].selectedMissionId : undefined;
    });
    if (this.selectedMissionId) {
      // TODO below code duplication spot 1
      this.observationMission$ = this.store.pipe(select(fromMissions.selectMissionById(this.selectedMissionId)));
      this.observationMission$.subscribe(mission => {
        this.observationMission = Object.assign({}, mission);
      });
      // code duplication spot 1 end
    }
    if (!this.observationMission) {
      const observationMission = new ObservationMission(
        uuid()
      );
      this.store.dispatch(new CreateMission(observationMission));
      // TODO below code duplication spot 2
      this.observationMission$ = this.store.pipe(select(fromMissions.selectMissionById(observationMission.id)));
      this.observationMission$.subscribe(mission => {
        this.observationMission = Object.assign({}, mission);
      });
      // code duplication spot 2 end
    }
  }

  leaveMission(): void {
    this.updateMission();
    this.resetSelection();
    this.navigationService.navigateTo('home');
  }

  startObserving(): void {
    this.store.dispatch(new UpdateSelectionContext(
      '1',
      {selectedMissionId: this.observationMission.id}
    ));
    this.updateMission();
    this.navigationService.navigateTo('animal-observation');
  }

  updateMission(): void {
    this.store.dispatch(new UpdateMission(this.observationMission.id, this.observationMission));
  }

  resetSelection(): void {
    this.store.dispatch(new UpdateSelectionContext(
      '1',
      {selectedMissionId: undefined, selectedObservationId: undefined}
      ));
  }


}

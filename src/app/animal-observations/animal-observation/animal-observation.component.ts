import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../shared/service/navigation.service';
import {AnimalObservation} from '../model/animal-observation';

import {v4 as uuid} from 'uuid';
import {Sex} from '../model/sex.enum';
import {Age} from '../model/age.enum';
import {PregnancyGrade} from '../model/pregnancy-grade.enum';
import {AnimalGroup} from '../../shared/model/interface/animal/animal-group';
import {Observable} from 'rxjs';
import {SelectionContext} from '../../shared/model/common/selection-context';
import {select, Store} from '@ngrx/store';
import * as fromSelectionContext from '../../shared/selection-context/selection-context.selectors';
import * as fromMissionsReducers from '../../missions/mission.reducers';
import {ObservationAction} from '../../observation-actions/model/observation-action';
import {CreateObservation} from '../../observation-actions/observation-action.actions';
import {CreateAnimalObservation} from '../animal-observation.actions';
import {UpdateSelectionContext} from '../../shared/selection-context/selection-context.actions';

@Component({
  selector: 'app-animal-observation',
  templateUrl: './animal-observation.component.html',
  styleUrls: ['./animal-observation.component.css']
})


export class AnimalObservationComponent implements OnInit {

  showDetails = false;

  private selectionContext$: Observable<SelectionContext[]> = this.store.pipe(select(fromSelectionContext.selectSelectionContext));
  selectedMissionId;

  observationAction: ObservationAction;

  observations: AnimalObservation[] = [];
  groups: AnimalGroup[] = [];

  selectedObservation: AnimalObservation;
  selectedGroups: AnimalGroup[] = [];
  activeGroup: AnimalGroup;

  constructor(
    private navigationService: NavigationService,
    private store: Store<fromMissionsReducers.State>
  ) {
  }

  ngOnInit() {
    this.selectionContext$.subscribe(selectionContext => {
      this.selectedMissionId = selectionContext[0].selectedMissionId;
    });

    this.observationAction = new ObservationAction(
      uuid(),
      this.selectedMissionId
    );

    this.store.dispatch(new CreateObservation(this.observationAction));
    this.store.dispatch(new UpdateSelectionContext(
      '1',
      {selectedObservationId: this.observationAction.id}
    ));
  }

  addObservation(): void {
    if (this.activeGroup) {
      const observation = new AnimalObservation(
        uuid(),
        uuid(),
        this.activeGroup.id,
        [],
        Sex.U,
        Age.U,
        PregnancyGrade.EMPTY,
        ''
      );
      this.observations.push(observation);
      this.activeGroup.groupMembers.push(observation);
    }
  }

  addGroup(): void {
    const groupId = uuid();
    const observation = new AnimalObservation(
      uuid(),
      this.observationAction.id,
      groupId,
      [],
      Sex.U,
      Age.U,
      PregnancyGrade.EMPTY,
      ''
    );
    const group = new AnimalGroup(
      groupId,
      '',
      [observation]
    );
    this.observations.push(observation);
    this.groups.push(group);
  }

  stopObservingAnimals() {
    for (const observation of this.observations) {
      this.store.dispatch(new CreateAnimalObservation(observation));
    }
    this.navigationService.navigateTo('observation-action');
  }

  getSelectedObservation() {
    if (!this.selectedObservation) {
      this.selectedObservation = this.observations.filter(obs => obs.animalGroupId === this.activeGroup.id)[0];
      if (!this.selectedObservation) {
        this.selectedObservation = this.activeGroup.groupMembers[0];
      }
    }
    return this.selectedObservation;
  }

  onObservationSelected(selectedObservation: AnimalObservation) {
    if (selectedObservation.id !== this.selectedObservation.id) {
      this.selectedObservation = selectedObservation;
    }
    this.activeGroup = this.groups.find(group => group.id === selectedObservation.animalGroupId);
  }

  onGroupSelected(selectedGroup: AnimalGroup) {
    if (this.selectedGroups.find(group => group.id === selectedGroup.id)) {
      this.selectedGroups.splice(this.selectedGroups.findIndex(group => group.id === selectedGroup.id), 1);
      if (this.selectedGroups) {
        this.activeGroup = this.groups[0];
      }
    } else {
      this.selectedGroups.push(selectedGroup);
    }
    this.activeGroup = selectedGroup;
  }
}

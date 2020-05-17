import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../shared/service/navigation.service';
import {AnimalObservation} from '../model/animal-observation';

import {v4 as uuid} from 'uuid';
import {Sex} from '../model/sex.enum';
import {Age} from '../model/age.enum';
import {PregnancyGrade} from '../model/pregnancy-grade.enum';
import {AnimalSide} from '../model/animal-side.enum';
import {AnimalGroup} from '../../shared/model/interface/animal/animal-group';

@Component({
  selector: 'app-animal-observation',
  templateUrl: './animal-observation.component.html',
  styleUrls: ['./animal-observation.component.css']
})


export class AnimalObservationComponent implements OnInit {

  private showDetails = false;

  private obs1and2GroupId = uuid();
  private obs3GroupId = uuid();

  private obs1: AnimalObservation = new AnimalObservation(
    uuid(),
    uuid(),
    this.obs1and2GroupId,
    [
      {
        id: uuid(),
        imageTag: 1,
        animalSide: AnimalSide.LEFT
      },
      {
        id: uuid(),
        imageTag: 2,
        animalSide: AnimalSide.RIGHT
      },
      {
        id: uuid(),
        imageTag: 3,
        animalSide: AnimalSide.LEFT
      }
    ],
    Sex.F,
    Age.A,
    PregnancyGrade.PREGNANT,
    'Animal One'
  );
  private obs2: AnimalObservation = new AnimalObservation(
    uuid(),
    uuid(),
    this.obs1and2GroupId,
    [
      {
        id: uuid(),
        imageTag: 22,
        animalSide: AnimalSide.RIGHT
      },
      {
        id: uuid(),
        imageTag: 23,
        animalSide: AnimalSide.LEFT
      }
    ],
    Sex.F,
    Age.SA,
    PregnancyGrade.EVENTUALLY_PREGNANT,
    'Animal Two'
  );
  private obs3: AnimalObservation = new AnimalObservation(
    uuid(),
    uuid(),
    this.obs3GroupId,
    [
      {
        id: uuid(),
        imageTag: 311,
        animalSide: AnimalSide.RIGHT
      }
    ],
    Sex.M,
    Age.F,
    PregnancyGrade.NOT_PREGNANT,
    'Animal Three'
  );

  private observations: AnimalObservation[] = [this.obs1, this.obs2, this.obs3];

  private group1: AnimalGroup = {id: uuid(), groupName: 'Group 1', groupMembers: [this.obs1, this.obs2]};
  private group2: AnimalGroup = {id: uuid(), groupName: 'Group 2', groupMembers: [this.obs3]};

  private groups: AnimalGroup[] = [this.group1, this.group2];

  private selectedObservation: AnimalObservation;
  private selectedGroups: AnimalGroup[] = [];
  private activeGroup: AnimalGroup;

  constructor(
    private navigationService: NavigationService
  ) {
  }

  ngOnInit() {
  }

  addObservation(): void {
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
    // TODO append to the selected group. To do this need to create the selection.
    this.activeGroup.groupMembers.push(observation);
  }

  addGroup(): void {
    const groupId = uuid();
    const observationActionId = uuid(); // TODO this should be the observation action id that is generated when entering this page.
    const observation = new AnimalObservation(
      uuid(),
      observationActionId,
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
    this.groups.push(group);
  }

  stopObservingAnimals() {
    //  @TODO
    // in this component there is inserted the observationAction compnent which must be created when start observation from the missions
    // component. Update the animalObservations list in the components observation action and then redirect to observation-action.
    console.log(`Redirecting to observation-action`);
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

import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../shared/service/navigation.service';
import {AnimalObservation} from '../model/animal-observation';

import {v4 as uuid} from 'uuid';
import {Sex} from '../model/sex.enum';
import {Age} from '../model/age.enum';
import {PregnancyGrade} from '../model/pregnancy-grade.enum';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-animal-observation',
  templateUrl: './animal-observation.component.html',
  styleUrls: ['./animal-observation.component.css']
})


export class AnimalObservationComponent implements OnInit {

  private showFiller = false;

  private showDetails = false;

  private obs1: AnimalObservation = new AnimalObservation(
    uuid(),
    uuid(),
    [1, 2, 3],
    Sex.F,
    Age.A,
    PregnancyGrade.PREGNANT,
    'Animal One'
  );
  private obs2: AnimalObservation = new AnimalObservation(
    uuid(),
    uuid(),
    [23, 24],
    Sex.F,
    Age.SA,
    PregnancyGrade.EVENTUALLY_PREGNANT,
    'Animal Two'
  );
  private obs3: AnimalObservation = new AnimalObservation(
    uuid(),
    uuid(),
    [31],
    Sex.M,
    Age.F,
    PregnancyGrade.NOT_PREGNANT,
    'Animal Three'
  );


  private observations: AnimalObservation[] = [this.obs1, this.obs2, this.obs3];

  private group1: any = { id: 1, groupName: 'Group 1', observations: [this.obs1, this.obs2]};
  private group2: any = { id: 2, groupName: 'Group 2', observations: [this.obs3]};

  private groups: any[] = [this.group1, this.group2];

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];


  constructor(
    private navigationService: NavigationService
  ) {
  }

  ngOnInit() {
  }

  stopObservingAnimals() {
    //  @TODO
    // in this component there is inserted the observationAction compnent which must be created when start observation from the missions
    // component. Update the animalObservations list in the components observation action and then redirect to observation-action.
    console.log(`Redirecting to observation-action`);
    this.navigationService.navigateTo('observation-action');
  }
}

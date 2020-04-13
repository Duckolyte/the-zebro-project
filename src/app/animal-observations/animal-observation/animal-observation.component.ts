import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../../shared/service/navigation.service';
import {AnimalObservation} from '../model/animal-observation';

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
  ) { }

  ngOnInit() {
  }

  stopObservingAnimals() {
    const dummyAnimalObservation1 = new AnimalObservation();
    const dummyAnimalObservation2 = new AnimalObservation();
    const dummySetOFAnimals = [dummyAnimalObservation1, dummyAnimalObservation2];
    //  @TODO
    // in this component there is inserted the observationAction compnent which must be created when start observation from the missions
    // component. Update the animalObservations list in the components observation action and then redirect to observation-action.
    console.log(`Redirecting to observation-action`);
    this.navigationService.navigateTo('observation-action');
  }
}

import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../../shared/service/navigation.service';
import {AnimalObservation} from '../model/animal-observation';

@Component({
  selector: 'app-animal-observation',
  templateUrl: './animal-observation.component.html',
  styleUrls: ['./animal-observation.component.css']
})

export class AnimalObservationComponent implements OnInit {

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

import {Component, Input, OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {AnimalObservation} from '../model/animal-observation';
import {AnimalSide} from '../model/animal-side.enum';
import {v4 as uuid} from 'uuid';

export interface ImageId {
  name: string;
}

@Component({
  selector: 'app-observation-form',
  templateUrl: './observation-form.component.html',
  styleUrls: ['./observation-form.component.css']
})
export class ObservationFormComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly rightSide = AnimalSide.RIGHT;
  readonly leftSide = AnimalSide.LEFT;

  @Input()
  private observation: AnimalObservation;
  imageRightIds: ImageId[] = [];
  imageLeftIds: ImageId[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  getAnimalSideImageTags(side: AnimalSide) {
    return this.observation.imageIds.filter(desc => desc.animalSide === side);
  }

  add(event: MatChipInputEvent, side: AnimalSide): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.observation.imageIds.push(
        {
          id: uuid(),
          imageTag: Number(value.trim()),
          animalSide: side
        });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(imageId: number): void {
    const index = this.observation.imageIds.indexOf(this.observation.imageIds.find(description => description.imageTag === imageId));

    if (index >= 0) {
      this.observation.imageIds.splice(index, 1);
    }
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {AnimalObservation} from '../model/animal-observation';

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

  @Input()
  private observation: AnimalObservation;
  imageRightIds: ImageId[] = [];
  imageLeftIds: ImageId[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  add(event: MatChipInputEvent, imageIds: ImageId[]): void {
    const input = event.input;
    const value = event.value;

    // Add image id
    if ((value || '').trim()) {
      imageIds.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(imageId: ImageId, imageIds: ImageId[]): void {
    const index = imageIds.indexOf(imageId);

    if (index >= 0) {
      imageIds.splice(index, 1);
    }
  }

}

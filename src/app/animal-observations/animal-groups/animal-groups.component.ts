import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {AnimalSide} from '../model/animal-side.enum';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {AnimalObservation} from '../model/animal-observation';
import {AnimalGroup} from '../../shared/model/interface/animal/animal-group';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-animal-groups',
  templateUrl: './animal-groups.component.html',
  styleUrls: ['./animal-groups.component.css']
})
export class AnimalGroupsComponent implements OnInit {

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  @Input()
  private groups: AnimalGroup[];

  @Output()
  selected = new EventEmitter<AnimalObservation>();

  constructor() {
  }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.observation.imageIds.push(
        {
          id: uuid(),
          imageTag: Number(value.trim()),
          animalSide: AnimalSide.RIGHT
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

  selectObservationRow($event: MouseEvent) {
    this.selected.emit(this.observation);
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AnimalObservation} from '../model/animal-observation';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {AnimalSide} from '../model/animal-side.enum';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-observation-row',
  templateUrl: './observation-row.component.html',
  styleUrls: ['./observation-row.component.css']
})
export class ObservationRowComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  @Input()
  showDetails: boolean;

  @Input()
  selectedObservationRow: AnimalObservation;

  @Input()
  private observation: AnimalObservation;

  @Output()
  selected = new EventEmitter<AnimalObservation>();

  constructor() { }

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

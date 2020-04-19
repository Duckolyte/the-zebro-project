import {Component, Input, OnInit, Pipe, PipeTransform} from '@angular/core';
import {AnimalObservation} from '../model/animal-observation';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

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
  private observation: AnimalObservation;

  constructor() { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.observation.imageIds.push(Number(value.trim()));
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(imageId: number): void {
    const index = this.observation.imageIds.indexOf(imageId);

    if (index >= 0) {
      this.observation.imageIds.splice(index, 1);
    }
  }

}

import {Component, Input, OnInit, Pipe, PipeTransform} from '@angular/core';
import {AnimalObservation} from '../model/animal-observation';

@Component({
  selector: 'app-observation-row',
  templateUrl: './observation-row.component.html',
  styleUrls: ['./observation-row.component.css']
})
export class ObservationRowComponent implements OnInit {

  @Input()
  showDetails: boolean;

  @Input()
  private observation: AnimalObservation;

  constructor() { }

  ngOnInit() {
  }

}

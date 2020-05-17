import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {AnimalGroup} from '../../shared/model/interface/animal/animal-group';

@Component({
  selector: 'app-animal-groups',
  templateUrl: './animal-groups.component.html',
  styleUrls: ['./animal-groups.component.css']
})
export class AnimalGroupsComponent implements OnInit {

  selectable = true;
  removable = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  @Input()
  private groups: AnimalGroup[];

  @Output()
  groupSelected = new EventEmitter<AnimalGroup>();

  constructor() {
  }

  ngOnInit() {
  }

  selectGroup( group: AnimalGroup) {
    this.groupSelected.emit(group);
  }

}

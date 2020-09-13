import {AnimalObservation} from '../../../../animal-observations/model/animal-observation';

export class AnimalGroup {
  id: string;
  groupName: string;
  groupMembers: AnimalObservation[];


  constructor(id: string, groupName: string, groupMembers: AnimalObservation[]) {
    this.id = id;
    this.groupName = groupName;
    this.groupMembers = groupMembers;
  }
}

import {Animal} from '../../../../animal-observations/model/animal';

export interface AnimalGroup {
  id: string;
  groupName: string;
  groupMembers: Animal[];
}

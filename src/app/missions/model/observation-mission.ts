import {ParcSection} from './parc-section';
import {ObservationAction} from '../../observation-actions/model/observation-action';

export class ObservationMission {
  id: string;
  parcSection: ParcSection;
  timeStamp: Date;
  actions: ObservationAction[];

  constructor(id: string = '1', parcSection: ParcSection = 1, timeStamp: Date = new Date(), actions: ObservationAction[] = []) {
    this.id = id,
    this.parcSection = parcSection;
    this.timeStamp = timeStamp;
    this.actions = actions;
  }

}

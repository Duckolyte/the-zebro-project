import {ParcSection} from './parc-section';
import {ObservationAction} from '../observation/observation-action';

export class ObservationMission {
  private id: bigint;
  parcSection: ParcSection;
  timeStamp: Date;
  actions: ObservationAction[];

  constructor(parcSection: ParcSection = 1, timeStamp: Date = new Date(), actions: ObservationAction[] = []) {
    this.parcSection = parcSection;
    this.timeStamp = timeStamp;
    this.actions = actions;
  }

  getId() {
    return this.id;
  }
}

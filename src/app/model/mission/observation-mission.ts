import {ParcSection} from './parc-section';
import {ObservationAction} from '../observation/observation-action';

export class ObservationMission {
  private id: bigint;
  private parcSection: ParcSection;
  private actions: ObservationAction[];

  getId() {
    return this.id;
  }
}

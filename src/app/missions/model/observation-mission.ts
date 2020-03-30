import {ParcSection} from './parc-section';
import {ObservationAction} from '../../observation-actions/model/observation-action';

export class ObservationMission {
  parcSection: ParcSection;
  timeStamp: Date;

  constructor(
    public id: string,
    parcSection: ParcSection = ParcSection.H,
    timeStamp: Date = new Date()
  )
  {
    this.parcSection = parcSection;
    this.timeStamp = timeStamp;
  }

}

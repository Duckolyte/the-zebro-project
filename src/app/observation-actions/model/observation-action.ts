import {AnimalObservation} from '../../animal-observations/model/animal-observation';
import {ObservationQualityCode} from './observation-quality-code.enum';
import {GpsPoint} from '../../shared/model/common/gps-point';

export class ObservationAction {
  observationQualityCode: ObservationQualityCode;
  gps: GpsPoint;
  observationDateTime: Date;

  constructor(
    public id: string,
    public missionId: string,
    observationQualityCode: ObservationQualityCode = 0,
    gps: GpsPoint = new GpsPoint(),
    observationDateTime: Date = new Date()
  ) {
    this.observationQualityCode = observationQualityCode;
    this.gps = gps;
    this.observationDateTime = observationDateTime;
  }
}

import {AnimalObservation} from './animal-observation';
import {ObservationQualityCode} from './observation-quality-code.enum';
import {GpsPoint} from '../common/gps-point';

export class ObservationAction {
  private id: bigint;
  observations: AnimalObservation[];
  observationQualityCode: ObservationQualityCode;
  gps: GpsPoint;
  observationDateTime: Date;

  constructor(
    observations: AnimalObservation[] = [],
    observationQualityCode: ObservationQualityCode = 0,
    gps: GpsPoint = new GpsPoint(),
    observationDateTime: Date = new Date()
  ) {
    this.observations = observations;
    this.observationQualityCode = observationQualityCode;
    this.gps = gps;
    this.observationDateTime = observationDateTime;
  }

  public countAnimalsObserved(): number {
    return this.observations.length;
  }
}

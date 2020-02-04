import {AnimalObservation} from './animal-observation';
import {ObservationQualityCode} from './observation-quality-code.enum';
import {GpsPoint} from '../common/gps-point';

export class ObservationAction {
  private id: bigint;
  private observations: AnimalObservation[];
  private observationQualityCode: ObservationQualityCode;
  private gps: GpsPoint;
  private observationDateTime: Date;

  public countAnimalsObserved(): number {
    return this.observations.length;
  }
}

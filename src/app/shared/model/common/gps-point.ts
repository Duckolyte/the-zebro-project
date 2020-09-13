import {v4 as uuid} from 'uuid';

export class GpsPoint {
  private id: string;
  public x: string;
  public y: string;


  constructor(x?: string, y?: string) {
    this.id = uuid();
    this.x = x;
    this.y = y;
  }
}

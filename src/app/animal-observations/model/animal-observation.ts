import {Sex} from './sex.enum';
import {Age} from './age';
import {PregnancyGrade} from './pregnancy-grade.enum';

export class AnimalObservation {
  id: string;
  // private rightSideImageReferences: number[]; TODO references are from image to Observation
  //private leftSideImageReferences: number[]; TODO references are from image to Observation
  private sex: Sex;
  private age: Age;
  private pregnancyGrade: PregnancyGrade;
  private animalName: string;
}

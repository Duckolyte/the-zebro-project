import {Sex} from './sex.enum';
import {Age} from './age';
import {PregnancyGrade} from './pregnancy-grade.enum';

export class AnimalObservation {
  private RightSideImageReferences: number[];
  private LeftSideImageReferences: number[];
  private sex: Sex;
  private age: Age;
  private pregnancyGrade: PregnancyGrade;
  private animalName: string;
}

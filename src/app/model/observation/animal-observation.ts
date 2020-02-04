import {Sex} from '../animal/sex.enum';
import {Age} from '../animal/age';
import {PregnancyGrade} from '../animal/pregnancy-grade.enum';

export class AnimalObservation {
  private RightSideImageReferences: number[];
  private LeftSideImageReferences: number[];
  private sex: Sex;
  private age: Age;
  private pregnancyGrade: PregnancyGrade;
  private animalName: string;
}

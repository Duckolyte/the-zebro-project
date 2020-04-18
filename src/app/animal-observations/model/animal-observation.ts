import {Sex} from './sex.enum';
import {Age} from './age.enum';
import {PregnancyGrade} from './pregnancy-grade.enum';

export class AnimalObservation {
  id: string;
  observationActionId: string;
  sex: Sex;
  age: Age;
  pregnancyGrade: PregnancyGrade;
  animalName: string;

  constructor(id: string, observationActionId: string, sex: Sex, age: Age, pregnancyGrade: PregnancyGrade, animalName: string) {
    this.id = id;
    this.observationActionId = observationActionId;
    this.sex = sex;
    this.age = age;
    this.pregnancyGrade = pregnancyGrade;
    this.animalName = animalName;
  }
}

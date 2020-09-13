import {Sex} from './sex.enum';
import {Age} from './age.enum';
import {PregnancyGrade} from './pregnancy-grade.enum';
import {ImageDescription} from './image-description';

export class AnimalObservation {
  id: string;
  observationActionId: string;
  animalGroupId: string;
  imageIds: ImageDescription[];
  sex: Sex;
  age: Age;
  pregnancyGrade: PregnancyGrade;
  animalName: string;

  constructor(
    id: string,
    observationActionId: string,
    animalGroupId: string,
    imageIds: ImageDescription[],
    sex: Sex,
    age: Age,
    pregnancyGrade: PregnancyGrade,
    animalName: string
  ) {
    this.id = id;
    this.observationActionId = observationActionId;
    this.animalGroupId = animalGroupId;
    this.imageIds = imageIds;
    this.sex = sex;
    this.age = age;
    this.pregnancyGrade = pregnancyGrade;
    this.animalName = animalName;
  }
}

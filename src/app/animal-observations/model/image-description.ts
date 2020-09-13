import {AnimalSide} from './animal-side.enum';

export interface ImageDescription {
  id: string;
  imageTag: number;
  animalSide: AnimalSide;
}

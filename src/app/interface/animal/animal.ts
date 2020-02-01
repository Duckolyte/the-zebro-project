export interface Animal {
  id: bigint;
  gender: number;
  ageFirstObservation: any; // comes from the observation table (redundant) == observation table record where the animalId is the first time in the list of animal ids
  dateFirstObservation: any; // comes from the observation table (redundant) == observation table record where the animalId is the first time in the list of animal ids
  parcSectionFirstObservation: bigint; // use section id? Enum of a parc section? is redundant as well like the ones above.
  animalGroupId: bigint;
  motherOrFoal: any; // Mutter/Fohlen what is this  a bool? isMother, isFoal? [0,1]
  scars: any; // how to capture scars. Make a preset of scars?
  dateOfBirth: string;
  comment: string;
}




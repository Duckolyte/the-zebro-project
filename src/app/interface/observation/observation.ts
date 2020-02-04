/*
There should be one observation
and animals can be added to the observation
*/

export interface Observation {
  observationId: bigint;
  observationDate: string; // could be stored as date-time
  observationTime: string; // "
  session: bigint; // what is the meanding of a session? Most likely a session id here
  parcSection: any; // type needs to be declared
  location: object; // gpsX and gpsY in a location object
  animalCount: number; // do not implement animals count should be dynamically counted
  animalIndividuals: object[]; // animal objects or ids in here
  // pregancy is bound to an individual or a group ?
  // if bound to an individual doesn't make any sense in observation table
  // when the observation table tells about a observated group.
  pregnancy: any; // how can pragnancy be meassuared. Months of pregnance?
  observationCode: any; // what is the observation code? observationId?
  comment: string;
}

import {Injectable} from '@angular/core';
import {ObservationMission} from '../model/mission/observation-mission';

@Injectable({
  providedIn: 'root'
})
export class ObservationMissionService {

  allMissions: ObservationMission[];
  selectedMission: ObservationMission;

  constructor() {
    // @TODO
    //  here should be a HTTPS call to the backend that gets all missions or a query against the store (not implemented yet)
    // the store gets fed when the app starts up.
    const dummyMission1 = new ObservationMission( 1, new Date(), []);
    const dummyMission2 = new ObservationMission( 2, new Date(), []);
    const dummyMission3 = new ObservationMission( 1, new Date(), []);
    this.updateAllMissions([dummyMission1, dummyMission2, dummyMission3]);
  }

  updateAllMissions(missions: ObservationMission[]) {
    this.allMissions = missions;
  }

  getAllMissions(): ObservationMission[] {
    // @TODO
    // get missions from the store
    // e.g. return store.getMissions();
    return this.allMissions;
  }

  appendMissions(missions: ObservationMission[]): void {
    // @TODO
    // get missions from the store
    // e.g. return store.getMissions();
    this.allMissions.concat(missions);
  }

  getSelectedMission() {
    return this.selectedMission;
  }

  updateMission(mission: ObservationMission): void {
    // @TODO
    // get mission from store
    // let missions = store.getMissions();
    // @OBSOLETE const missionToUpdate = this.allMissions.filter(aMission => aMission.getId() === mission.getId());
    this.allMissions = this.allMissions.map(
      aMission => this.allMissions.find(
        missionToCompare => missionToCompare.getId() === mission.getId() ? mission : aMission
      )); // @TODO check that logic this should replace the mission with the id in the allMissions array
  }

  deleteMission(mission: ObservationMission): bigint {
    // @TODO
    // store update remove mission
    // e.g. store.deleteMission(mission);
    this.allMissions = this.allMissions.filter(aMission => aMission.getId() !== mission.getId());
    return mission.getId();
  }

  storeObservationMission(observationMission: ObservationMission): ObservationMission {
    this.allMissions.push(observationMission);
    return observationMission;
  }

  createObservationMission() {
    return new ObservationMission(1, new Date(), []);
  }
}

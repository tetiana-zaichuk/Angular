import { AircraftType } from "./aircraftType";

export class Aircraft {
    constructor(
        public id?: number,
        public aircraftName?: string,
        public aircraftType?: {
            [key: string]: AircraftType},
        public aircraftReleaseDate?: Date
       /* public exploitationTimeSpan?: TimeSpan*/) { }
}
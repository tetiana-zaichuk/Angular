import { AircraftType } from './aircraftType';

export class Aircraft {
    constructor(
        public id?: number,
        public aircraftName?: string,
        public aircraftType?: AircraftType,
        public aircraftReleaseDate?: Date,
        public exploitationTimeSpan?: Date/*TimeSpan*/) { }
}

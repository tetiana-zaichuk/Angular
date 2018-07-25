import { Flight } from "./flight";
import { Crew } from "./crew";
import { Aircraft } from "./aircraft";

export class Departure {
    constructor(
        public id?: number,
        public flight?: Flight,
        public departureDate?: Date,
        public crew?: Crew,
        public aircraft?: Aircraft) { }
}
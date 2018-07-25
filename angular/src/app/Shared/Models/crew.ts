import { Pilot } from "./pilot";
import { Stewardess } from "./stewardess";

export class Crew {
    constructor(
        public id?: number,
        public pilot?: Pilot,
        public Stewardesses?: Stewardess[]) { }
}
import { Flight } from "./flight";

export class Ticket {
    constructor(
        public id?: number,
        public price?: number, 
        public flightId?: number,
        public flight?: Flight) { }
}
import { Ticket } from "./ticket";

export class Flight {
    constructor(
        public id?: number,
        public departure?: string,
        public departureTime?: Date,
        public destination?: string,
        public arrivalTime?: Date,
        public tickets?: Ticket[]) { }
}
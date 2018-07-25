import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../Models/flight';

@Injectable()
/*({
    providedIn: 'root',
  })*/
export class FlightService {

    private url = "/api/Flights";

    constructor(private http: HttpClient) {
    }

    get() {
        return this.http.get(this.url);
    }

    create(flight: Flight) {
        return this.http.post(this.url, flight);
    }
    update(flight: Flight) {
        return this.http.put(this.url + '/' + flight.id, flight);
    }
    delete(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
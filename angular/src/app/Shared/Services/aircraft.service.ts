import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aircraft } from '../Models/aircraft';
import { AircraftType } from '../Models/aircraftType';

@Injectable()
/*({
    providedIn: 'root',
  })*/
export class AircraftService {

    private url = "/api/Aircrafts";

    constructor(private http: HttpClient) {
    }

    get() {
        return this.http.get(this.url);
    }

    create(aircraft: Aircraft) {
        return this.http.post(this.url, aircraft);
    }
    update(aircraft: Aircraft) {
        return this.http.put(this.url + '/' + aircraft.id, aircraft);
    }
    delete(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
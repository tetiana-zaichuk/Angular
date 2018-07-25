import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departure } from '../Models/departure';

@Injectable()
/*({
    providedIn: 'root',
  })*/
export class DepartureService {

    private url = "/api/Departures";

    constructor(private http: HttpClient) {
    }

    get() {
        return this.http.get(this.url);
    }

    create(departure: Departure) {
        return this.http.post(this.url, departure);
    }
    update(departure: Departure) {
        return this.http.put(this.url + '/' + departure.id, departure);
    }
    delete(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
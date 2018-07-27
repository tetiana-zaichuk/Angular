import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departure } from '../Models/departure';

@Injectable()
/*({
    providedIn: 'root',
  })*/
export class DepartureService {

    private url = "/api/Departures";
    departures: Departure[];

    constructor(private http: HttpClient) {
    }

    get() {
        return this.http.get(this.url);
    }

    getDetail(id: number) {
        this.http.get(this.url).subscribe((data: Departure[]) => this.departures = data);
        return this.departures.find(d => d.id === id);
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
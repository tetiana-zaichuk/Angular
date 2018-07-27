import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AircraftType } from '../Models/aircraftType';

@Injectable()
/*({
    providedIn: 'root',
  })*/
export class AircraftTypeService {

    private url = "/api/AircraftsTypes";

    constructor(private http: HttpClient) {}

    get() {
        return this.http.get(this.url);
    }

    create(aircraftType: AircraftType) {
        return this.http.post(this.url, aircraftType);
    }
    update(aircraftType: AircraftType) {

        return this.http.put(this.url + '/' + aircraftType.id, aircraftType);
    }
    delete(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
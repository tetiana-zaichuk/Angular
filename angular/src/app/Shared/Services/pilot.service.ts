import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pilot } from '../Models/pilot';

@Injectable()
/*({
    providedIn: 'root',
  })*/
export class PilotService {

    private url = "/api/Pilots";

    constructor(private http: HttpClient) {
    }

    get() {
        return this.http.get(this.url);
    }

    create(pilot: Pilot) {
        return this.http.post(this.url, pilot);
    }
    update(pilot: Pilot) {
        return this.http.put(this.url + '/' + pilot.id, pilot);
    }
    delete(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
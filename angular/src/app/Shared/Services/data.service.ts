import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AircraftType } from '../Models/aircraftType';
 
@Injectable()
/*({
    providedIn: 'root',
  })*/
export class DataService {
 
    private url = "/api/AircraftsTypes";
 
    constructor(private http: HttpClient) {
    }
 
    getTypes() {
        return this.http.get(this.url); 
    }
 
    createType(aircraftType: AircraftType) {
        return this.http.post(this.url, aircraftType);
    }
    updateType(aircraftType: AircraftType) {
  
        return this.http.put(this.url + '/' + aircraftType.id, aircraftType);
    }
    deleteType(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
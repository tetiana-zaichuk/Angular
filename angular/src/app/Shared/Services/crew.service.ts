import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crew } from '../Models/crew';

@Injectable()
/*({
    providedIn: 'root',
  })*/
export class CrewService {

    private url = "/api/Crew";

    constructor(private http: HttpClient) {}

    get() {
        return this.http.get(this.url);
    }

    create(crew: Crew) {
        return this.http.post(this.url, crew);
    }
    update(crew: Crew) {
        return this.http.put(this.url + '/' + crew.id, crew);
    }
    delete(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
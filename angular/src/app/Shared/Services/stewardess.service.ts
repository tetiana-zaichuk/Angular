import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stewardess } from '../Models/stewardess';

@Injectable()
/*({
    providedIn: 'root',
  })*/
export class StewardessService {

    private url = "/api/Stewardessess";

    constructor(private http: HttpClient) {
    }

    get() {
        return this.http.get(this.url);
    }

    create(stewardess: Stewardess) {
        return this.http.post(this.url, stewardess);
    }
    update(stewardess: Stewardess) {
        return this.http.put(this.url + '/' + stewardess.id, stewardess);
    }
    delete(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
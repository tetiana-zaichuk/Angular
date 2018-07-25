import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../Models/ticket';

@Injectable()
/*({
    providedIn: 'root',
  })*/
export class TicketService {

    private url = "/api/Tickets";

    constructor(private http: HttpClient) {
    }

    get() {
        return this.http.get(this.url);
    }

    create(ticket: Ticket) {
        return this.http.post(this.url, ticket);
    }
    update(ticket: Ticket) {
        return this.http.put(this.url + '/' + ticket.id, ticket);
    }
    delete(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
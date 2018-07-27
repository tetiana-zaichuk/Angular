import { Component, OnInit } from '@angular/core';
import { TicketService } from '../Shared/Services/ticket.service';
import { FlightService } from '../Shared/Services/flight.service';
import { Flight } from '../Shared/Models/flight';
import { Ticket } from '../Shared/Models/ticket';

@Component({
  selector: 'ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  ticket: Ticket = new Ticket();
  tickets: Ticket[];
  tableMode: boolean = true;
  selectedFlight: Flight = new Flight();
  flights: Flight[];

  constructor(private dataService: TicketService, private flightService: FlightService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.get().subscribe((data: Ticket[]) => this.tickets = data);
    this.flightService.get().subscribe((data: Flight[]) => this.flights = data);
  }

  save() {
    this.ticket.flightId=this.selectedFlight.id;
    this.ticket.flight=this.selectedFlight;
    if (this.ticket.id == null) {
      this.dataService.create(this.ticket).subscribe((data: Ticket) => this.tickets.push(data));
    } else {
      this.dataService.update(this.ticket).subscribe(data => this.load());
    }
    this.cancel();
  }

  cancel() {
    this.ticket = new Ticket();
    this.tableMode = true;
  }

  delete(ticket: Ticket) {
    this.dataService.delete(ticket.id).subscribe(data => this.load());
  }
  
  add(ticket) {
    this.ticket=ticket;
    this.tableMode = false;
  }
}

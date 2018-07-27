import { Component, OnInit } from '@angular/core';
import { FlightService } from '../Shared/Services/flight.service';
import { TicketService } from '../Shared/Services/ticket.service';
import { DepartureService } from '../Shared/Services/departure.service';
import { Departure } from '../Shared/Models/departure';
import { Ticket } from '../Shared/Models/ticket';
import { Flight } from '../Shared/Models/flight';

@Component({
  selector: 'flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flight: Flight = new Flight();
  flights: Flight[];
  tableMode: boolean = true;
  selectedTickets: Ticket[];
  tickets: Ticket[];
  departures: Departure[];
  selectedDeparture: Departure = new Departure();

  constructor(private flightService: FlightService, private ticketService: TicketService, private departureService: DepartureService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.flightService.get().subscribe((data: Flight[]) => this.flights = data);
    this.ticketService.get().subscribe((data: Ticket[]) => this.tickets = data);
    this.departureService.get().subscribe((data: Departure[]) => this.departures = data);
  }

  save() {
    this.flight.tickets=this.selectedTickets;
    if (this.flight.id == null) {
      this.flightService.create(this.flight).subscribe((data: Flight) => this.flights.push(data));
    } else {
      this.flightService.update(this.flight).subscribe(data => this.load());
    }
    this.cancel();
  }

  cancel() {
    this.flight = new Flight();
    this.tableMode = true;
  }

  delete(flight: Flight) {
    this.flightService.delete(flight.id).subscribe(data => this.load());
  }

  add(flight) {
    this.flight = flight;
    this.tableMode = false;
  }
}

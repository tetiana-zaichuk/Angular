import { Component, OnInit } from '@angular/core';
import { FlightService } from '../Shared/Services/flight.service';
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
  selected: Flight;

  constructor(private dataService: FlightService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.get().subscribe((data: Flight[]) => this.flights = data);
  }

  onSelect(data: Flight): void {
    this.selected = data;
  }
  change(flight?: Flight){
    this.flight = flight;
    console.log(this.flights[0]);
    this.cancel();
    this.tableMode = false;
  }
  save() {
    if (this.flight.id == null) {
      this.dataService.create(this.flight).subscribe((data: Flight) => this.flights.push(data));
    } else {
      this.dataService.update(this.flight).subscribe(data => this.load());
    }
    this.cancel();
  }
  edit(flight: Flight) {
    this.flight = flight;
  }
  cancel() {
    this.flight = new Flight();
    this.tableMode = true;
  }
  delete(flight: Flight) {
    this.dataService.delete(flight.id).subscribe(data => this.load());
  }
  add() {
    console.log(this.flights[0]);
    this.cancel();
    this.tableMode = false;
  }
}

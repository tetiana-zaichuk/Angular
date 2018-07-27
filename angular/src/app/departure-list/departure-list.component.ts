import { Component, OnInit } from '@angular/core';
import { DepartureService } from '../Shared/Services/departure.service';
import { Departure } from '../Shared/Models/departure';

@Component({
  selector: 'departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {

  departure: Departure = new Departure();
  departures: Departure[];
  tableMode: boolean = true;

  constructor(private departureService: DepartureService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.departureService.get().subscribe((data: Departure[]) => this.departures = data);  
  }

  save() {
    this.departure.flight = null; 
    this.departure.aircraft = null; 
    this.departure.crew = null; 
    if (this.departure.id == null) {
      this.departureService.create(this.departure).subscribe((data: Departure) => this.departures.push(data));
    } else {
      this.departureService.update(this.departure).subscribe(data => this.load());
    }
    this.cancel();
  }

  cancel() {
    this.departure = new Departure();
    this.tableMode = true;
  }

  delete(departure: Departure) {
    this.departureService.delete(departure.id).subscribe(data => this.load());
  }

  add(departure) {
    this.departure=departure;
    this.tableMode = false;
  }

}

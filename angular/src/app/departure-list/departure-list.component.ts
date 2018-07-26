import { Component, OnInit } from '@angular/core';
import { DepartureService } from '../Shared/Services/departure.service';
import { Departure } from '../Shared/Models/departure';
import { Flight } from '../Shared/Models/flight';

@Component({
  selector: 'departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {

  departure: Departure = new Departure();
  departures: Departure[];
  tableMode: boolean = true;
  selected: Departure;

  constructor(private dataService: DepartureService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.get().subscribe((data: Departure[]) => this.departures = data);
  }

  onSelect(data: Departure): void {
    this.selected = data;
  }
  change(departure?: Departure){
    this.departure = departure;
    console.log(this.departures[0]);
    this.cancel();
    this.tableMode = false;
  }
  save() {
    if (this.departure.id == null) {
      this.dataService.create(this.departure).subscribe((data: Departure) => this.departures.push(data));
    } else {
      this.dataService.update(this.departure).subscribe(data => this.load());
    }
    this.cancel();
  }
  edit(departure: Departure) {
    this.departure = departure;
  }
  cancel() {
    this.departure = new Departure();
    this.tableMode = true;
  }
  delete(departure: Departure) {
    this.dataService.delete(departure.id).subscribe(data => this.load());
  }
  add() {
    console.log(this.departures[0]);
    this.cancel();
    this.tableMode = false;
  }

}

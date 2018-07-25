import { Component, OnInit } from '@angular/core';
import { DepartureService } from '../Shared/Services/departure.service';
import { Departure } from '../Shared/Models/departure';

@Component({
  selector: 'departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {

  aircraft: Departure = new Departure();
  aircrafts: Departure[];
  tableMode: boolean = true;
  selectedAircraft: Departure;

  constructor(private dataService: DepartureService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.get().subscribe((data: Departure[]) => this.aircrafts = data);
  }

  onSelect(data: Departure): void {
    this.selectedAircraft = data;
  }

  save() {
    if (this.aircraft.id == null) {
      this.dataService.create(this.aircraft).subscribe((data: Departure) => this.aircrafts.push(data));
    } else {
      this.dataService.update(this.aircraft).subscribe(data => this.load());
    }
    this.cancel();
  }
  edit(aircraft: Departure) {
    this.aircraft = aircraft;
  }
  cancel() {
    this.aircraft = new Departure();
    this.tableMode = true;
  }
  delete(aircraft: Departure) {
    this.dataService.delete(aircraft.id).subscribe(data => this.load());
  }
  add() {
    console.log(this.aircrafts[0]);
    this.cancel();
    this.tableMode = false;
  }

}

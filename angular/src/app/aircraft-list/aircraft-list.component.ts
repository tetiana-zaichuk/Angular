import { Component, OnInit } from '@angular/core';
import { AircraftService } from '../Shared/Services/aircraft.service';
import { Aircraft } from '../Shared/Models/aircraft';

@Component({
  selector: 'aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent implements OnInit {
  
  aircraft: Aircraft = new Aircraft();
  aircrafts: Aircraft[];
  tableMode: boolean = true;
  selectedAircraft: Aircraft;

  constructor(private dataService: AircraftService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.get().subscribe((data: Aircraft[]) => this.aircrafts = data);
  }
  
  onSelect(data: Aircraft): void {
    this.selectedAircraft = data;
  }

  save() {
    if (this.aircraft.id == null) {
      this.dataService.create(this.aircraft).subscribe((data: Aircraft) => this.aircrafts.push(data));
    } else {
      this.dataService.update(this.aircraft).subscribe(data => this.load());
    }
    this.cancel();
  }
  change(aircraft?: Aircraft){
    this.aircraft = aircraft;
    console.log(this.aircrafts[0]);
    this.cancel();
    this.tableMode = false;
  }
  edit(aircraft: Aircraft) {
    this.aircraft = aircraft;
  }
  cancel() {
    this.aircraft = new Aircraft();
    this.tableMode = true;
  }
  delete(aircraft: Aircraft) {
    this.dataService.delete(aircraft.id).subscribe(data => this.load());
  }
  add() {
    console.log(this.aircrafts[0]);
    this.cancel();
    this.tableMode = false;
  }

}

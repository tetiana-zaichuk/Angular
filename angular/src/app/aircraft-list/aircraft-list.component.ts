import { Component, OnInit } from '@angular/core';
import { AircraftService } from '../Shared/Services/aircraft.service';
import { AircraftTypeService } from '../Shared/Services/aircrafttype.service';
import { Aircraft } from '../Shared/Models/aircraft';
import { AircraftType } from '../Shared/Models/aircraftType';

@Component({
  selector: 'aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent implements OnInit {
  
  aircraft: Aircraft = new Aircraft();
  aircrafts: Aircraft[];
  aircraftTypes: AircraftType[];
  selectedAircraftType: AircraftType= new AircraftType();
  tableMode: boolean = true;

  constructor(private AircraftService: AircraftService, private aircraftTypeService: AircraftTypeService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.AircraftService.get().subscribe((data: Aircraft[]) => this.aircrafts = data);
    this.aircraftTypeService.get().subscribe((data: AircraftType[]) => this.aircraftTypes = data);
  }
  
  // onSelect(data: Aircraft): void {
  //   this.selectedAircraft = data;
  // }

  save() {
    
    //this.aircraft.aircraftType=this.selectedAircraftType;
    console.log(this.aircraft);
    if (this.aircraft.id == null) {
      this.aircraft.id=0;
      this.AircraftService.create(this.aircraft).subscribe((data: Aircraft) => this.aircrafts.push(data));
    } else {
      this.AircraftService.update(this.aircraft).subscribe(data => this.load());
    }
    this.cancel();
  }
  // change(aircraft?: Aircraft){
  //   this.aircraft = aircraft;
  //   this.cancel();
  //   this.tableMode = false;
  // }
  // edit(aircraft: Aircraft) {
  //   this.aircraft = aircraft;
  // }
  cancel() {
    this.aircraft = new Aircraft();
    this.tableMode = true;
  }
  delete(aircraft: Aircraft) {
    this.AircraftService.delete(aircraft.id).subscribe(data => this.load());
  }
  add(aircraft) {
    this.aircraft=aircraft;
    this.tableMode = false;
  }

}

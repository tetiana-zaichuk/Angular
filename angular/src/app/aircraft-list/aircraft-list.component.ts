import { Component, OnInit } from '@angular/core';
import { AircraftService } from '../Shared/Services/aircraft.service';
import { AircraftTypeService } from '../Shared/Services/aircrafttype.service';
import { Aircraft } from '../Shared/Models/aircraft';
import {AircraftType} from '../Shared/Models/aircraftType';

@Component({
  selector: 'aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent implements OnInit {
  
  aircraft: Aircraft = new Aircraft();
  aircrafts: Aircraft[];
  aircraftTypes: AircraftType[];
  selectedAircraftTypes:AircraftType= new Aircraft();
  tableMode: boolean = true;
  selectedAircraft: Aircraft;

  constructor(private dataService: AircraftService, private aircraftTypeService: AircraftTypeService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.get().subscribe((data: Aircraft[]) => this.aircrafts = data);
    this.aircraftTypeService.getTypes().subscribe((data: Aircraft[]) => this.aircraftTypes = data);
  }
  
  // onSelect(data: Aircraft): void {
  //   this.selectedAircraft = data;
  // }

  save() {
    
    this.aircraft.aircraftType=this.selectedAircraftTypes;
    console.log(this.aircraft);
    if (this.aircraft.id == null) {
      this.dataService.create(this.aircraft).subscribe((data: Aircraft) => this.aircrafts.push(data));
    } else {
      this.dataService.update(this.aircraft).subscribe(data => this.load());
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
    this.dataService.delete(aircraft.id).subscribe(data => this.load());
  }
  add(aircraft) {
    this.aircraft=aircraft;
this.selectedAircraftTypes=aircraft.aircraftType;
    this.tableMode = false;
  }

}

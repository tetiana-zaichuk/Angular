import { Component, OnInit } from '@angular/core';
import { AircraftTypeService } from '../Shared/Services/aircrafttype.service';
import { AircraftType } from '../Shared/Models/aircraftType';

@Component({
  selector: 'aircraft-type-list',
  templateUrl: './aircraft-type-list.component.html',
  styleUrls: ['./aircraft-type-list.component.css']
})
export class AircraftTypeListComponent implements OnInit {
  aircraftType: AircraftType = new AircraftType();
  aircraftsTypes: AircraftType[];
  tableMode: boolean = true;

  constructor(private dataService: AircraftTypeService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.get().subscribe((data: AircraftType[]) => this.aircraftsTypes = data);
  }

  save() {
    if (this.aircraftType.id == null) {
      this.dataService.create(this.aircraftType).subscribe((data: AircraftType) => this.aircraftsTypes.push(data));
    } else {
      this.dataService.update(this.aircraftType).subscribe(data => this.load());
    }
    this.cancel();
  }

  cancel() {
    this.aircraftType = new AircraftType();
    this.tableMode = true;
  }
  
  delete(p: AircraftType) {
    this.dataService.delete(p.id).subscribe(data => this.load());
  }

  add(aircraftType) {
    this.aircraftType = aircraftType;
    this.tableMode = false;
  }

}

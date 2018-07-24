import { Component, OnInit } from '@angular/core';
import { DataService } from '../Shared/Services/data.service';
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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadTypes();    // загрузка данных при старте компонента  
  }
  // получаем данные через сервис
  loadTypes() {
    this.dataService.getTypes().subscribe((data: AircraftType[]) => this.aircraftsTypes = data);
  }
  // сохранение данных
  save() {
    if (this.aircraftType.id == null) {
      this.dataService.createType(this.aircraftType)
        .subscribe((data: AircraftType) => this.aircraftsTypes.push(data));
    } else {
      this.dataService.updateType(this.aircraftType)
        .subscribe(data => this.loadTypes());
    }
    this.cancel();
  }
  editType(p: AircraftType) {
    this.aircraftType = p;
  }
  cancel() {
    this.aircraftType = new AircraftType();
    this.tableMode = true;
  }
  delete(p: AircraftType) {
    this.dataService.deleteType(p.id)
      .subscribe(data => this.loadTypes());
  }
  add() {
    console.log(this.aircraftsTypes[0]);
    this.cancel();
    this.tableMode = false;
  }

}

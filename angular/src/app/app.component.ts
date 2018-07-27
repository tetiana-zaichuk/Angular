import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

// import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';
// import { AircraftType } from './AircraftType';
 
// @Component({
//     selector: 'app',
//     templateUrl: './app.component.html',
//     providers: [DataService]
// })
// export class AppComponent implements OnInit {
 
//     aircraftType: AircraftType = new AircraftType();   
//     aircraftsTypes: AircraftType[];               
//     tableMode: boolean = true;        
 
//     constructor(private dataService: DataService) { }
 
//     ngOnInit() {
//         this.loadTypes();    // загрузка данных при старте компонента  
//     }
//     // получаем данные через сервис
//     loadTypes() {
//         this.dataService.getTypes().subscribe((data: AircraftType[]) => this.aircraftsTypes = data );
//     }
//     // сохранение данных
//     save() {
//         if (this.aircraftType.id == null) {
//             this.dataService.createType(this.aircraftType)
//                 .subscribe((data: AircraftType) => this.aircraftsTypes.push(data));
//         } else {
//             this.dataService.updateType(this.aircraftType)
//                 .subscribe(data => this.loadTypes());
//         }
//         this.cancel();
//     }
//     editType(p: AircraftType) {
//         this.aircraftType = p;
//     }
//     cancel() {
//         this.aircraftType = new AircraftType();
//         this.tableMode = true;
//     }
//     delete(p: AircraftType) {
//         this.dataService.deleteType(p.id)
//             .subscribe(data => this.loadTypes());
//     }
//     add() {

//       console.log(this.aircraftsTypes[])
//         this.cancel();

//         this.tableMode = false;
//     }
// }
/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { SharedModule } from './Shared/shared.module';
import { AppComponent } from './app.component';
import { AircraftTypeService } from './Shared/Services/aircrafttype.service';
import { AircraftService } from './Shared/Services/aircraft.service';
import { CrewService } from './Shared/Services/crew.service';
import { DepartureService } from './Shared/Services/departure.service';
import { FlightService } from './Shared/Services/flight.service';
import { PilotService } from './Shared/Services/pilot.service';
import { StewardessService } from './Shared/Services/stewardess.service';
import { TicketService } from './Shared/Services/ticket.service';

import { AircraftTypeListComponent } from './aircraft-type-list/aircraft-type-list.component';
import { AircraftTypeDetailComponent } from './aircraft-type-list/aircraft-type-detail/aircraft-type-detail.component';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { AircraftDetailComponent } from './aircraft-list/aircraft-detail/aircraft-detail.component';
import { CrewDetailComponent } from './crew-list/crew-detail/crew-detail.component';
import { DepartureDetailComponent } from './departure-list/departure-detail/departure-detail.component';
import { FlightDetailComponent } from './flight-list/flight-detail/flight-detail.component';
import { PilotDetailComponent } from './pilot-list/pilot-detail/pilot-detail.component';
import { TicketDetailComponent } from './ticket-list/ticket-detail/ticket-detail.component';
import { StewardessDetailComponent } from './stewardess-list/stewardess-detail/stewardess-detail.component';
import { CrewListComponent } from './crew-list/crew-list.component';
import { DepartureListComponent } from './departure-list/departure-list.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { PilotListComponent } from './pilot-list/pilot-list.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { StewardessListComponent } from './stewardess-list/stewardess-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, AircraftTypeListComponent, AircraftTypeDetailComponent, AircraftListComponent, AircraftDetailComponent, CrewDetailComponent, DepartureDetailComponent, FlightDetailComponent, PilotDetailComponent, TicketDetailComponent, StewardessDetailComponent, CrewListComponent, DepartureListComponent, FlightListComponent, PilotListComponent, TicketListComponent, StewardessListComponent],
  bootstrap: [AppComponent],
  providers: [AircraftTypeService, AircraftService, CrewService, DepartureService, FlightService, PilotService, StewardessService, TicketService]
})
export class AppModule { } 

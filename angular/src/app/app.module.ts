import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { AircraftTypeListComponent } from './aircraft-type-list/aircraft-type-list.component';
import { AircraftTypeDetailComponent } from './aircraft-type-list/aircraft-type-detail/aircraft-type-detail.component';

import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { AircraftDetailComponent } from './aircraft-list/aircraft-detail/aircraft-detail.component';
import { CrewListComponent } from './crew-list/crew-list.component';
import { CrewDetailComponent } from './crew-list/crew-detail/crew-detail.component';
import { DepartureListComponent } from './departure-list/departure-list.component';
import { DepartureDetailComponent } from './departure-list/departure-detail/departure-detail.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailComponent } from './flight-list/flight-detail/flight-detail.component';
import { PilotListComponent } from './pilot-list/pilot-list.component';
import { PilotDetailComponent } from './pilot-list/pilot-detail/pilot-detail.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticket-list/ticket-detail/ticket-detail.component';
import { StewardessListComponent } from './stewardess-list/stewardess-list.component';
import { StewardessDetailComponent } from './stewardess-list/stewardess-detail/stewardess-detail.component';

import { ComponentsEightEntitiesModule } from './components-eight-entities/components-eight-entities.module';

import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, ComponentsEightEntitiesModule],
  declarations: [AppComponent, AircraftTypeListComponent, AircraftTypeDetailComponent, AircraftListComponent, 
    AircraftDetailComponent, CrewDetailComponent, DepartureDetailComponent, FlightDetailComponent, PilotDetailComponent, 
    TicketDetailComponent, StewardessDetailComponent, CrewListComponent, DepartureListComponent, FlightListComponent, 
    PilotListComponent, TicketListComponent, StewardessListComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { } 

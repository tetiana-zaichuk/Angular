import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TicketListComponent } from '../ticket-list/ticket-list.component';
import { AircraftTypeService } from '../Shared/Services/aircrafttype.service';
import { AircraftService } from '../Shared/Services/aircraft.service';
import { CrewService } from '../Shared/Services/crew.service';
import { DepartureService } from '../Shared/Services/departure.service';
import { FlightService } from '../Shared/Services/flight.service';
import { PilotService } from '../Shared/Services/pilot.service';
import { StewardessService } from '../Shared/Services/stewardess.service';
import { TicketService } from '../Shared/Services/ticket.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [/*TicketListComponent*/],
  // exports: [
  //   TicketListComponent
  // ]
  providers: [ AircraftTypeService, AircraftService, CrewService, DepartureService, 
    FlightService, PilotService, StewardessService, TicketService ]
})
export class ComponentsEightEntitiesModule { }

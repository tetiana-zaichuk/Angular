import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightListComponent } from './flight-list/flight-list.component';
import { DepartureListComponent } from './departure-list/departure-list.component';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { AircraftTypeListComponent } from './aircraft-type-list/aircraft-type-list.component';
import { CrewListComponent } from './crew-list/crew-list.component';
import { PilotListComponent } from './pilot-list/pilot-list.component';
import { StewardessListComponent } from './stewardess-list/stewardess-list.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

import { DepartureDetailComponent } from './departure-list/departure-detail/departure-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/flights', pathMatch: 'full' },
  { path: 'flights', component: FlightListComponent },
  { path: 'departures', component: DepartureListComponent },
  { path: 'aircrafts', component: AircraftListComponent },
  { path: 'crews', component: CrewListComponent },
  { path: 'aircraftsTypes', component: AircraftTypeListComponent },
  { path: 'pilots', component: PilotListComponent },
  { path: 'stewardesses', component: StewardessListComponent },
  { path: 'tickets', component: TicketListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
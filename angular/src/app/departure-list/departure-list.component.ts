import { Component, OnInit } from '@angular/core';
import { DepartureService } from '../Shared/Services/departure.service';
import { FlightService } from '../Shared/Services/flight.service';
import { AircraftService } from '../Shared/Services/aircraft.service';
import { CrewService } from '../Shared/Services/crew.service';
import { Departure } from '../Shared/Models/departure';
import { Flight } from '../Shared/Models/flight';
import { Aircraft } from '../Shared/Models/aircraft';
import { Crew } from '../Shared/Models/crew';

@Component({
  selector: 'departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {

  departure: Departure = new Departure();
  departures: Departure[];
  tableMode: boolean = true;

  selectedFlight: Flight = new Flight();
  flights: Flight[];

  selectedAircraft: Aircraft = new Aircraft();
  aircrafts: Aircraft[];

  selectedCrew: Crew = new Crew();
  crews: Crew[];


  constructor(private departureService: DepartureService, private flightService: FlightService,
    private aircraftService: AircraftService, private crewService: CrewService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.departureService.get().subscribe((data: Departure[]) => this.departures = data);
    this.flightService.get().subscribe((data: Flight[]) => this.flights = data);
    this.aircraftService.get().subscribe((data: Aircraft[]) => this.aircrafts = data);
    this.crewService.get().subscribe((data: Crew[]) => this.crews = data);
  }

  save() {
    this.departure.flight = this.selectedFlight;
    this.departure.aircraft = this.selectedAircraft;
    this.departure.crew = this.selectedCrew;
    if (this.departure.id == null) {
      this.departureService.create(this.departure).subscribe((data: Departure) => this.departures.push(data));
    } else {
      this.departureService.update(this.departure).subscribe(data => this.load());
    }
    this.cancel();
  }

  cancel() {
    this.departure = new Departure();
    this.tableMode = true;
  }

  delete(departure: Departure) {
    this.departureService.delete(departure.id).subscribe(data => this.load());
  }

  add(departure) {
    this.departure=departure;
    this.tableMode = false;
  }

}

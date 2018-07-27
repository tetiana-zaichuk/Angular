import { Component, OnInit } from '@angular/core';
import { PilotService } from '../Shared/Services/pilot.service';
import { CrewService } from '../Shared/Services/crew.service';
import { Crew } from '../Shared/Models/crew';
import { Pilot } from '../Shared/Models/pilot';

@Component({
  selector: 'pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css']
})
export class PilotListComponent implements OnInit {

  pilot: Pilot = new Pilot();
  pilots: Pilot[];
  tableMode: boolean = true;
  crews: Crew[];
  selectedCrew: Crew = new Crew();

  constructor(private dataService: PilotService, private crewService: CrewService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.get().subscribe((data: Pilot[]) => this.pilots = data);
    this.crewService.get().subscribe((data: Crew[]) => this.crews = data);
  }

  save() {
    this.pilot.crewId=this.selectedCrew.id;
    if (this.pilot.id == null) {
      this.dataService.create(this.pilot).subscribe((data: Pilot) => this.pilots.push(data));
    } else {
      this.dataService.update(this.pilot).subscribe(data => this.load());
    }
    this.cancel();
  }

  cancel() {
    this.pilot = new Pilot();
    this.tableMode = true;
  }

  delete(pilot: Pilot) {
    this.dataService.delete(pilot.id).subscribe(data => this.load());
  }

  add(pilot) {
    this.pilot = pilot;
    this.tableMode = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { CrewService } from '../Shared/Services/crew.service';
import { PilotService } from '../Shared/Services/pilot.service';
import { StewardessService } from '../Shared/Services/stewardess.service';
import { Crew } from '../Shared/Models/crew';
import { Pilot } from '../Shared/Models/pilot';
import { Stewardess } from '../Shared/Models/stewardess';

@Component({
  selector: 'crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {

  crew: Crew = new Crew();
  crews: Crew[];
  selectedPilot: Pilot = new Pilot();
  pilots: Pilot[];
  stewardesses: Stewardess[];
  selectedStewardesses: Stewardess[];
  tableMode: boolean = true;

  constructor(private CrewService: CrewService, private PilotService: PilotService, private StewardessService: StewardessService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.CrewService.get().subscribe((data: Crew[]) => this.crews = data);
    this.PilotService.get().subscribe((data: Pilot[]) => this.pilots = data);
    this.StewardessService.get().subscribe((data: Stewardess[]) => this.stewardesses = data);
  }

  save() {
    //this.crew.pilot = this.selectedPilot;
    this.crew.stewardesses = null;//this.selectedStewardesses;
    if (this.crew.id == null) {
      this.CrewService.create(this.crew).subscribe((data: Crew) => this.crews.push(data));
    } else {
      this.CrewService.update(this.crew).subscribe(data => this.load());
    }
    this.cancel();
  }

  cancel() {
    this.crew = new Crew();
    this.tableMode = true;
  }

  delete(crew: Crew) {
    this.CrewService.delete(crew.id).subscribe(data => this.load());
  }

  add(crew) {
    this.crew = crew;
    this.tableMode = false;
  }

}

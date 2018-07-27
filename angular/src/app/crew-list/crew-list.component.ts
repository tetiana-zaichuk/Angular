import { Component, OnInit } from '@angular/core';
import { CrewService } from '../Shared/Services/crew.service';
import { Crew } from '../Shared/Models/crew';

@Component({
  selector: 'crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {

  crew: Crew = new Crew();
  crews: Crew[];
  tableMode: boolean = true;

  constructor(private CrewService: CrewService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.CrewService.get().subscribe((data: Crew[]) => this.crews = data);
  }

  save() {
    this.crew.stewardesses = null;
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

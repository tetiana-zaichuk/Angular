import { Component, OnInit } from '@angular/core';
import { StewardessService } from '../Shared/Services/stewardess.service';
import { CrewService } from '../Shared/Services/crew.service';
import { Stewardess } from '../Shared/Models/stewardess';
import { Crew } from '../Shared/Models/crew';

@Component({
  selector: 'stewardess-list',
  templateUrl: './stewardess-list.component.html',
  styleUrls: ['./stewardess-list.component.css']
})
export class StewardessListComponent implements OnInit {

  stewardess: Stewardess = new Stewardess();
  stewardesses: Stewardess[];
  tableMode: boolean = true;
  crews: Crew[];
  selectedCrew: Crew = new Crew();

  constructor(private dataService: StewardessService, private crewService: CrewService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.get().subscribe((data: Stewardess[]) => this.stewardesses = data);
    this.crewService.get().subscribe((data: Crew[]) => this.crews = data);
  }

  save() {
    this.stewardess.crewId=this.selectedCrew.id;
    if (this.stewardess.id == null) {
      this.dataService.create(this.stewardess).subscribe((data: Stewardess) => this.stewardesses.push(data));
    } else {
      this.dataService.update(this.stewardess).subscribe(data => this.load());
    }
    this.cancel();
  }

  cancel() {
    this.stewardess = new Stewardess();
    this.tableMode = true;
  }

  delete(stewardess: Stewardess) {
    this.dataService.delete(stewardess.id).subscribe(data => this.load());
  }

  add(stewardess) {
    this.stewardess = stewardess;
    this.tableMode = false;
  }

}

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
  selectedCrew: Crew;

  constructor(private dataService: CrewService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.get().subscribe((data: Crew[]) => this.crews = data);
  }

  onSelect(data: Crew): void {
    this.selectedCrew = data;
  }

  save() {
    if (this.crew.id == null) {
      this.dataService.create(this.crew).subscribe((data: Crew) => this.crews.push(data));
    } else {
      this.dataService.update(this.crew).subscribe(data => this.load());
    }
    this.cancel();
  }
  edit(crew: Crew) {
    this.crew = crew;
  }
  cancel() {
    this.crew = new Crew();
    this.tableMode = true;
  }
  delete(crew: Crew) {
    this.dataService.delete(crew.id).subscribe(data => this.load());
  }
  add() {
    console.log(this.crews[0]);
    this.cancel();
    this.tableMode = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { PilotService } from '../Shared/Services/pilot.service';
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
  selectedPilot: Pilot;

  constructor(private dataService: PilotService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.get().subscribe((data: Pilot[]) => this.pilots = data);
  }

  onSelect(data: Pilot): void {
    this.selectedPilot = data;
  }

  save() {
    if (this.pilot.id == null) {
      this.dataService.create(this.pilot).subscribe((data: Pilot) => this.pilots.push(data));
    } else {
      this.dataService.update(this.pilot).subscribe(data => this.load());
    }
    this.cancel();
  }
  edit(pilot: Pilot) {
    this.pilot = pilot;
  }
  cancel() {
    this.pilot = new Pilot();
    this.tableMode = true;
  }
  delete(pilot: Pilot) {
    this.dataService.delete(pilot.id).subscribe(data => this.load());
  }
  add() {
    console.log(this.pilots[0]);
    this.cancel();
    this.tableMode = false;
  }

}

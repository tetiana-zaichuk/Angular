import { Component, OnInit } from '@angular/core';
import { StewardessService } from '../Shared/Services/stewardess.service';
import { Stewardess } from '../Shared/Models/stewardess';

@Component({
  selector: 'stewardess-list',
  templateUrl: './stewardess-list.component.html',
  styleUrls: ['./stewardess-list.component.css']
})
export class StewardessListComponent implements OnInit {

  stewardess: Stewardess = new Stewardess();
  stewardesses: Stewardess[];
  tableMode: boolean = true;
  selectedStewardess: Stewardess;

  constructor(private dataService: StewardessService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.get().subscribe((data: Stewardess[]) => this.stewardesses = data);
  }

  onSelect(data: Stewardess): void {
    this.selectedStewardess = data;
  }

  save() {
    if (this.stewardess.id == null) {
      this.dataService.create(this.stewardess).subscribe((data: Stewardess) => this.stewardesses.push(data));
    } else {
      this.dataService.update(this.stewardess).subscribe(data => this.load());
    }
    this.cancel();
  }
  edit(stewardess: Stewardess) {
    this.stewardess = stewardess;
  }
  cancel() {
    this.stewardess = new Stewardess();
    this.tableMode = true;
  }
  delete(stewardess: Stewardess) {
    this.dataService.delete(stewardess.id).subscribe(data => this.load());
  }
  add() {
    console.log(this.stewardess[0]);
    this.cancel();
    this.tableMode = false;
  }

}

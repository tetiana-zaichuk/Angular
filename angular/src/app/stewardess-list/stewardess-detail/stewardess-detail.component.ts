import { Component, OnInit, Input } from '@angular/core';
import { Stewardess } from '../../Shared/Models/stewardess'

@Component({
  selector: 'stewardess-detail',
  templateUrl: './stewardess-detail.component.html',
  styleUrls: ['./stewardess-detail.component.css']
})
export class StewardessDetailComponent implements OnInit {

  @Input() stewardess: Stewardess;
  tableMode: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}

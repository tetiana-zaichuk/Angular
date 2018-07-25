import { Component, OnInit, Input } from '@angular/core';
import { Aircraft } from '../Shared/Models/aircraft';

@Component({
  selector: 'aircraft-detail',
  templateUrl: './aircraft-detail.component.html',
  styleUrls: ['./aircraft-detail.component.css']
})

export class AircraftDetailComponent implements OnInit {

  @Input() aircraft: Aircraft;
  tableMode: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}


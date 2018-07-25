import { Component, OnInit, Input } from '@angular/core';
import { AircraftType } from '../Shared/Models/aircraftType';

@Component({
  selector: 'aircraft-type-detail',
  templateUrl: './aircraft-type-detail.component.html',
  styleUrls: ['./aircraft-type-detail.component.css']
})
export class AircraftTypeDetailComponent implements OnInit {

  @Input() aircrafttype: AircraftType;
  tableMode: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../../Shared/Models/flight';

@Component({
  selector: 'flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {

  @Input() flight: Flight;
  tableMode: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Departure } from '../../Shared/Models/departure';

@Component({
  selector: 'departure-detail',
  templateUrl: './departure-detail.component.html',
  styleUrls: ['./departure-detail.component.css']
})
export class DepartureDetailComponent implements OnInit {

  @Input() departure: Departure;
  tableMode: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}

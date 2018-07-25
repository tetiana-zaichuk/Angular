import { Component, OnInit, Input } from '@angular/core';
import { Pilot } from '../Shared/Models/pilot'

@Component({
  selector: 'pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailComponent implements OnInit {

  @Input() pilot: Pilot;
  tableMode: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}

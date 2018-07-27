import { Component, OnInit, Input } from '@angular/core';
import { Crew } from '../../Shared/Models/crew';

@Component({
  selector: 'crew-detail',
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.css']
})
export class CrewDetailComponent implements OnInit {

  @Input() crew: Crew;
  tableMode: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}

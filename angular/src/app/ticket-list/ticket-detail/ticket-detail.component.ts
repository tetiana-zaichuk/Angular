import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../../Shared/Models/ticket';

@Component({
  selector: 'ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  @Input() ticket: Ticket;
  tableMode: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}

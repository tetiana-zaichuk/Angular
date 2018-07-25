import { Component, OnInit } from '@angular/core';
import { TicketService } from '../Shared/Services/ticket.service';
import { Ticket } from '../Shared/Models/ticket';

@Component({
  selector: 'ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  ticket: Ticket = new Ticket();
  tickets: Ticket[];
  tableMode: boolean = true;
  selectedTicket: Ticket;

  constructor(private dataService: TicketService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.get().subscribe((data: Ticket[]) => this.tickets = data);
  }

  onSelect(data: Ticket): void {
    this.selectedTicket = data;
  }

  save() {
    if (this.ticket.id == null) {
      this.dataService.create(this.ticket).subscribe((data: Ticket) => this.tickets.push(data));
    } else {
      this.dataService.update(this.ticket).subscribe(data => this.load());
    }
    this.cancel();
  }
  edit(ticket: Ticket) {
    this.ticket = ticket;
  }
  cancel() {
    this.ticket = new Ticket();
    this.tableMode = true;
  }
  delete(ticket: Ticket) {
    this.dataService.delete(ticket.id).subscribe(data => this.load());
  }
  add() {
    console.log(this.tickets[0]);
    this.cancel();
    this.tableMode = false;
  }
}

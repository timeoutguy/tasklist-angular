import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ListItem } from 'src/app/types/list-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() listClickEvent = new EventEmitter()

  @Input() listArr: Array<ListItem> = []

  constructor() { }

  public handleClick(listId: number): void {
    this.listClickEvent.emit(listId);
  }

  ngOnInit(): void {
  }

}

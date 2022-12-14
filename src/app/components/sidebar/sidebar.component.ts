import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ListItem } from 'src/app/types/list-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() addListButtonClickEvent = new EventEmitter();
  @Output() listClickEvent = new EventEmitter()

  @Input() listArr: Array<ListItem> = []

  constructor() { }

  public handleClick(listId: number): void {
    this.listClickEvent.emit(listId);
  }

  public handleCreateListOpenModal() {
    this.addListButtonClickEvent.emit()
  }

  ngOnInit(): void {
  }

}

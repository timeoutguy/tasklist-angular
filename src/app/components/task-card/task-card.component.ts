import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TaskItem } from 'src/app/types/task-item';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Output() cardDeleteEvent = new EventEmitter();
  @Output() cardStatusChangeEvent = new EventEmitter();

  @Input() task: TaskItem

  constructor(private apiService: ApiService) { }

  public handleCardDelete(id: number) {
    this.cardDeleteEvent.emit(id);
  }

  handleStatusChange(id: number, title: string, isCompleted: boolean) {
    this.apiService.updateTask(id, title, !isCompleted).subscribe(_ => this.cardStatusChangeEvent.emit());
  }

  ngOnInit(): void {
  }

}

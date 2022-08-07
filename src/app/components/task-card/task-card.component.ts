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

  @Input() task: TaskItem

  constructor(private apiService: ApiService) { }

  public handleCardDelete(id: number) {
    this.apiService.deleteTask(id).subscribe();
    this.cardDeleteEvent.emit();
  }

  ngOnInit(): void {
  }

}

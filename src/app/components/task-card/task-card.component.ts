import { Component, Input, OnInit } from '@angular/core';
import { TaskItem } from 'src/app/types/task-item';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task: TaskItem

  constructor() { }

  ngOnInit(): void {
  }

}

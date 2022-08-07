import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TaskItem } from 'src/app/types/task-item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public taskArr: Array<TaskItem> = [];
  public filteredTaskArr: Array<TaskItem> = [];

  constructor(private apiService: ApiService) { }

  public handleTaskFilter(listId: number ){
    this.filteredTaskArr = this.taskArr.filter(task => task.listId == listId);
  }

  ngOnInit(): void {
    this.apiService.getTask().subscribe(response => {
      this.taskArr = response;
      this.filteredTaskArr = response;
    });
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ListItem } from 'src/app/types/list-item';
import { TaskItem } from 'src/app/types/task-item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  openModalEvent: Subject<void> = new Subject<void>();

  public taskArr: Array<TaskItem> = [];
  public filteredTaskArr: Array<TaskItem> = [];
  public listArr: Array<ListItem> = []


  constructor(private apiService: ApiService) { }

  public handleTaskFilter(listId: number ){
    this.filteredTaskArr = this.taskArr.filter(task => task.listId == listId);
  }

  public handleSearchFilter(textFilter: string) {
    this.filteredTaskArr = this.taskArr.filter(task => task.title.toLowerCase().includes(textFilter.toLowerCase()))
  }

  public handleCreateTaskOpenModal() {
    this.openModalEvent.next()
  }

  ngOnInit(): void {
    this.apiService.getTask().subscribe(response => {
      this.taskArr = response;
      this.filteredTaskArr = response;
    });
    this.apiService.getList().subscribe(response => this.listArr = response);
  }

}

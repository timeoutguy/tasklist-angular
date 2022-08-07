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

  openCreateTaskModalEvent: Subject<void> = new Subject<void>();
  openCreateListModalEvent: Subject<void> = new Subject<void>();

  public taskArr: Array<TaskItem> = [];
  public filteredTaskArr: Array<TaskItem> = [];
  public listArr: Array<ListItem> = []


  constructor(private apiService: ApiService) { }

  public handleTaskFilter(listId: number ){
    let list = this.listArr.find(list => list.id == listId)
    this.listArr.forEach(list => list.active = false);
    if(list != undefined) {
      list.active = true;
    }
    this.filteredTaskArr = this.taskArr.filter(task => task.listId == listId);
  }

  public handleSearchFilter(textFilter: string) {
    this.filteredTaskArr = this.taskArr.filter(task => task.title.toLowerCase().includes(textFilter.toLowerCase()))
  }

  public handleCreateTaskOpenModal() {
    this.openCreateTaskModalEvent.next()
  }

  public handleCreateListOpenModal() {
    this.openCreateListModalEvent.next();
  }

  public getTasks() {
    this.apiService.getTask().subscribe(response => {
      this.taskArr = response;
      let haveListActive = this.listArr.find(list => list.active);
      if(haveListActive) {
        this.filteredTaskArr = this.taskArr.filter(task => task.listId == haveListActive?.id)
      } else {
        this.filteredTaskArr = response;
      }
    });
  }

  public getLists(){
    this.apiService.getList().subscribe(response => {
      this.listArr = response;
      this.listArr.forEach(list => {
        list.active = false;
      })
    });
  }

  ngOnInit(): void {
    this.getTasks();
    this.getLists();
  }

}

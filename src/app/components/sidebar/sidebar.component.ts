import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ListItem } from 'src/app/types/list-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public listArr: Array<ListItem> = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getList().subscribe(response => this.listArr = response);
  }

}

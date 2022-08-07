import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../types/list-item';
import { TaskItem } from '../types/task-item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) {}

  getList(): Observable<ListItem[]> {
    return this.httpClient.get<ListItem[]>(`${this.baseUrl}/lists`)
  }

  getTask(): Observable<TaskItem[]> {
    return this.httpClient.get<TaskItem[]>(`${this.baseUrl}/tasks`)
  }
}

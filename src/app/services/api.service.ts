import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../types/list-item';
import { TaskCreate } from '../types/task-create';
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

  createTask(task: TaskCreate): Observable<void> {
    return this.httpClient.post<void>(`${this.baseUrl}/tasks`, {
      title: task.taskTitleFormControl,
      listId: Number(task.taskListIdFormControl),
    })
  }

  deleteTask(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/tasks/${id}`)
  }

  updateTask(id: number, title: string, isCompleted: boolean): Observable<void> {
    return this.httpClient.patch<void>(`${this.baseUrl}/tasks/${id}`, {
      title,
      isCompleted,
    })
  }
}

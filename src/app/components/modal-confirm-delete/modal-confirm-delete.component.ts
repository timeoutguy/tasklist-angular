import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modal-confirm-delete',
  templateUrl: './modal-confirm-delete.component.html',
  styleUrls: ['./modal-confirm-delete.component.scss']
})
export class ModalConfirmDeleteComponent {

  private eventsSubscription: Subscription = new Subscription();
  private cardToDelete: number = 0;

  @Output() taskDeleteConfirmationEvent = new EventEmitter();

  @Input() events: Observable<number>

  public isOpen: boolean = false;

  constructor(private apiService: ApiService) { }

  public handleTaskDelete() {
    this.apiService.deleteTask(this.cardToDelete).subscribe();
    this.taskDeleteConfirmationEvent.emit();
    this.isOpen = false;
  }

  public handleModalClose() {
    this.isOpen = false;
  }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((response) => {
      this.cardToDelete = response;
      this.isOpen = true;
    });
  }
}

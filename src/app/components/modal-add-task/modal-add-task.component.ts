import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ListItem } from 'src/app/types/list-item';

@Component({
  selector: 'app-modal-add-task',
  templateUrl: './modal-add-task.component.html',
  styleUrls: ['./modal-add-task.component.scss']
})
export class ModalAddTaskComponent implements OnInit {

  private eventsSubscription: Subscription;

  public isOpen: boolean = false;

  public taskFormGroup: FormGroup = new FormGroup({
    taskTitleFormControl: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    taskListIdFormControl: new FormControl<number|null>(1, [
      Validators.required,
    ]),
  })

  @Output() taskCreatedEvent = new EventEmitter();

  @Input() events: Observable<void>;
  @Input() listArr: Array<ListItem> = []

  constructor(private apiService: ApiService) { }

  public handleFormSubmit() {
    this.apiService.createTask(this.taskFormGroup.value).subscribe(_ => {
      this.isOpen = false;
      this.taskCreatedEvent.emit();
    });

  }

  public handleModalClose() {
    this.isOpen = false;
  }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe(() => this.isOpen = true);
  }

}

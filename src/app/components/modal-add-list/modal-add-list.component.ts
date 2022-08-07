import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modal-add-list',
  templateUrl: './modal-add-list.component.html',
  styleUrls: ['./modal-add-list.component.scss']
})
export class ModalAddListComponent implements OnInit {

  private eventsSubscription: Subscription;

  public isOpen: boolean = false;

  @Output() listCreatedEvent = new EventEmitter();

  @Input() events: Observable<void>

  public addListFromGroup: FormGroup = new FormGroup({
    listTitleFormControl: new FormControl(''),
  })

  constructor(private apiService: ApiService) { }

  public handleFormSubmit() {
    this.apiService.createList(this.addListFromGroup.value).subscribe(_ => {
      this.handleModalClose();
      this.listCreatedEvent.emit();
    });

  }

  public handleModalClose() {
    this.isOpen = false;
  }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe(() => this.isOpen = true);
  }

}

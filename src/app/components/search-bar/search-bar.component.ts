import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() taskSearchEvent = new EventEmitter();

  public formControl: FormControl = new FormControl('');

  constructor() { }

  public handleInputChange() {
    this.taskSearchEvent.emit(this.formControl.value);
  }

  ngOnInit(): void {
  }

}

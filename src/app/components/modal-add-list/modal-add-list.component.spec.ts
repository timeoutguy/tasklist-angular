import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddListComponent } from './modal-add-list.component';

describe('ModalAddListComponent', () => {
  let component: ModalAddListComponent;
  let fixture: ComponentFixture<ModalAddListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

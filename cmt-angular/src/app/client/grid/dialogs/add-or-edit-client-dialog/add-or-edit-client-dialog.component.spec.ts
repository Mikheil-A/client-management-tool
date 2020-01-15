import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditClientDialogComponent } from './add-or-edit-client-dialog.component';

describe('AddClientDialogComponent', () => {
  let component: AddOrEditClientDialogComponent;
  let fixture: ComponentFixture<AddOrEditClientDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditClientDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditClientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

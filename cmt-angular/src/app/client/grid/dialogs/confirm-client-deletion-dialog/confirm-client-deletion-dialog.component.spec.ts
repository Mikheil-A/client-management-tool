import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmClientDeletionDialogComponent } from './confirm-client-deletion-dialog.component';

describe('ConfirmClientDeletionDialogComponent', () => {
  let component: ConfirmClientDeletionDialogComponent;
  let fixture: ComponentFixture<ConfirmClientDeletionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmClientDeletionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmClientDeletionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

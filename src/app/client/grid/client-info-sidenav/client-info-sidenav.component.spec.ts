import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfoSidenavComponent } from './client-info-sidenav.component';

describe('ClientInfoSidenavComponent', () => {
  let component: ClientInfoSidenavComponent;
  let fixture: ComponentFixture<ClientInfoSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInfoSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInfoSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

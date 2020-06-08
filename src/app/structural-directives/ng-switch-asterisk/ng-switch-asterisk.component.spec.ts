import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchAsteriskComponent } from './ng-switch-asterisk.component';

describe('NgSwitchAsteriskComponent', () => {
  let component: NgSwitchAsteriskComponent;
  let fixture: ComponentFixture<NgSwitchAsteriskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchAsteriskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchAsteriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

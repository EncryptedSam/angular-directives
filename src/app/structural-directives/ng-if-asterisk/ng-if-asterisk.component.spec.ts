import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfAsteriskComponent } from './ng-if-asterisk.component';

describe('NgIfAsteriskComponent', () => {
  let component: NgIfAsteriskComponent;
  let fixture: ComponentFixture<NgIfAsteriskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfAsteriskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfAsteriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

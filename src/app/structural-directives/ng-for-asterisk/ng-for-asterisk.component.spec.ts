import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForAsteriskComponent } from './ng-for-asterisk.component';

describe('NgForAsteriskComponent', () => {
  let component: NgForAsteriskComponent;
  let fixture: ComponentFixture<NgForAsteriskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForAsteriskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForAsteriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

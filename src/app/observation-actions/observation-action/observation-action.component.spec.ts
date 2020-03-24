import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationActionComponent } from './observation-action.component';

describe('ObservationActionComponent', () => {
  let component: ObservationActionComponent;
  let fixture: ComponentFixture<ObservationActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationRowComponent } from './observation-row.component';

describe('ObservationRowComponent', () => {
  let component: ObservationRowComponent;
  let fixture: ComponentFixture<ObservationRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

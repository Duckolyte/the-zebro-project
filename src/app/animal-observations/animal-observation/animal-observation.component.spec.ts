import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalObservationComponent } from './animal-observation.component';

describe('AnimalObservationComponent', () => {
  let component: AnimalObservationComponent;
  let fixture: ComponentFixture<AnimalObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalObservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

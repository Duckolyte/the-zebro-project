import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZebraProfilComponent } from './zebra-profil.component';

describe('ZebraProfilComponent', () => {
  let component: ZebraProfilComponent;
  let fixture: ComponentFixture<ZebraProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZebraProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZebraProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

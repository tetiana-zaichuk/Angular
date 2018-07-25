import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftTypeDetailComponent } from './aircraft-type-detail.component';

describe('AircraftTypeDetailComponent', () => {
  let component: AircraftTypeDetailComponent;
  let fixture: ComponentFixture<AircraftTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AircraftTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

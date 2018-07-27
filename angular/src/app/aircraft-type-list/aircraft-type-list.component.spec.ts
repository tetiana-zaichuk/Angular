import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftTypeListComponent } from './aircraft-type-list.component';

describe('AircraftTypeListComponent', () => {
  let component: AircraftTypeListComponent;
  let fixture: ComponentFixture<AircraftTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AircraftTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappaInsuredInfoComponent } from './mappa-insured-info.component';

describe('MappaInsuerdInfoComponent', () => {
  let component: MappaInsuredInfoComponent;
  let fixture: ComponentFixture<MappaInsuredInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappaInsuredInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappaInsuredInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

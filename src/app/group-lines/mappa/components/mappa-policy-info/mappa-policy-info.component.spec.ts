import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappaPolicyInfoComponent } from './mappa-policy-info.component';

describe('MappaPolicyInfoComponent', () => {
  let component: MappaPolicyInfoComponent;
  let fixture: ComponentFixture<MappaPolicyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappaPolicyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappaPolicyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

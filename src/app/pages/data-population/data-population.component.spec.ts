import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPopulationComponent } from './data-population.component';

describe('DataPopulationComponent', () => {
  let component: DataPopulationComponent;
  let fixture: ComponentFixture<DataPopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPopulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

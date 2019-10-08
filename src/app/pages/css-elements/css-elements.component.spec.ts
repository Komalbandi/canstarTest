import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssElementsComponent } from './css-elements.component';

describe('CssElementsComponent', () => {
  let component: CssElementsComponent;
  let fixture: ComponentFixture<CssElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

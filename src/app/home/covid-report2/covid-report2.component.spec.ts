import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidReport2Component } from './covid-report2.component';

describe('CovidReport2Component', () => {
  let component: CovidReport2Component;
  let fixture: ComponentFixture<CovidReport2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidReport2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidReport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidReport1Component } from './covid-report1.component';

describe('CovidReport1Component', () => {
  let component: CovidReport1Component;
  let fixture: ComponentFixture<CovidReport1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidReport1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidReport1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

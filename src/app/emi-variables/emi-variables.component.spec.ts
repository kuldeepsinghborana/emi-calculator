import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiVariablesComponent } from './emi-variables.component';

describe('EmiVariablesComponent', () => {
  let component: EmiVariablesComponent;
  let fixture: ComponentFixture<EmiVariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiVariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

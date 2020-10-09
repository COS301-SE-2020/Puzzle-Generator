import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulSolveComponent } from './successful-solve.component';

describe('SuccessfulSolveComponent', () => {
  let component: SuccessfulSolveComponent;
  let fixture: ComponentFixture<SuccessfulSolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulSolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulSolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

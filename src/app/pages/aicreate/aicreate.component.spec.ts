import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AICreateComponent } from './aicreate.component';

describe('AICreateComponent', () => {
  let component: AICreateComponent;
  let fixture: ComponentFixture<AICreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AICreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AICreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

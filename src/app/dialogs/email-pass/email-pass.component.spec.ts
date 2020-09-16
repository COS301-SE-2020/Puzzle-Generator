import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPassComponent } from './email-pass.component';

describe('EmailPassComponent', () => {
  let component: EmailPassComponent;
  let fixture: ComponentFixture<EmailPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

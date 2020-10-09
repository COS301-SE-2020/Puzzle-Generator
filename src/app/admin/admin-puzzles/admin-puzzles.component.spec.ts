import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPuzzlesComponent } from './admin-puzzles.component';

describe('AdminPuzzlesComponent', () => {
  let component: AdminPuzzlesComponent;
  let fixture: ComponentFixture<AdminPuzzlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPuzzlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPuzzlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

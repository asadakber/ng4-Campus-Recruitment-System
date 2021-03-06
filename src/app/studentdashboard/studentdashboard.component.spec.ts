import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdashboardComponent } from './studentdashboard.component';

describe('StudentdashboardComponent', () => {
  let component: StudentdashboardComponent;
  let fixture: ComponentFixture<StudentdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

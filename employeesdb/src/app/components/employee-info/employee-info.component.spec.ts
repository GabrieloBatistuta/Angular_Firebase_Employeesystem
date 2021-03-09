import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmployeeInfoComponent } from './employee-info.component';

describe('EmployeeInfoComponent', () => {
  let component: EmployeeInfoComponent;
  let fixture: ComponentFixture<EmployeeInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

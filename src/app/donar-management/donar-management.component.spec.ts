import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarManagementComponent } from './donar-management.component';

describe('DonarManagementComponent', () => {
  let component: DonarManagementComponent;
  let fixture: ComponentFixture<DonarManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonarManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

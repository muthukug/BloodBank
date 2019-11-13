import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigndonarComponent } from './assigndonar.component';

describe('AssigndonarComponent', () => {
  let component: AssigndonarComponent;
  let fixture: ComponentFixture<AssigndonarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigndonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigndonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

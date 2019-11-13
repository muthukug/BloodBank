import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDonarComponent } from './confirm-donar.component';

describe('ConfirmDonarComponent', () => {
  let component: ConfirmDonarComponent;
  let fixture: ComponentFixture<ConfirmDonarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

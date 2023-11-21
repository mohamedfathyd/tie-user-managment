import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmInputComponent } from './confirm-input.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedTestingModule } from '../../../shared/shared.module.spec';

describe('ConfirmInputComponent', () => {
  let component: ConfirmInputComponent;
  let fixture: ComponentFixture<ConfirmInputComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmInputComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [SharedTestingModule]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

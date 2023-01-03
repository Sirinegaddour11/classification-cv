import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesPasswordComponent } from './candidates-password.component';

describe('CandidatesPasswordComponent', () => {
  let component: CandidatesPasswordComponent;
  let fixture: ComponentFixture<CandidatesPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

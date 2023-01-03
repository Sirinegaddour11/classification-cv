import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesSavedJobsComponent } from './candidates-saved-jobs.component';

describe('CandidatesSavedJobsComponent', () => {
  let component: CandidatesSavedJobsComponent;
  let fixture: ComponentFixture<CandidatesSavedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesSavedJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesSavedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

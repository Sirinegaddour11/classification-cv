import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesManageJobsComponent } from './candidates-manage-jobs.component';

describe('CandidatesManageJobsComponent', () => {
  let component: CandidatesManageJobsComponent;
  let fixture: ComponentFixture<CandidatesManageJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesManageJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesManageJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

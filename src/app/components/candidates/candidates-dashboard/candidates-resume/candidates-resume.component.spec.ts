import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesResumeComponent } from './candidates-resume.component';

describe('CandidatesResumeComponent', () => {
  let component: CandidatesResumeComponent;
  let fixture: ComponentFixture<CandidatesResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

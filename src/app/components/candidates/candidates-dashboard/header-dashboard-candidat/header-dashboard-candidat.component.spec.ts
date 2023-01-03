import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDashboardCandidatComponent } from './header-dashboard-candidat.component';

describe('HeaderDashboardCandidatComponent', () => {
  let component: HeaderDashboardCandidatComponent;
  let fixture: ComponentFixture<HeaderDashboardCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDashboardCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDashboardCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

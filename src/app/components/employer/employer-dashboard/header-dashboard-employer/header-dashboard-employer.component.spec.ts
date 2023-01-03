import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDashboardEmployerComponent } from './header-dashboard-employer.component';

describe('HeaderDashboardEmployerComponent', () => {
  let component: HeaderDashboardEmployerComponent;
  let fixture: ComponentFixture<HeaderDashboardEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDashboardEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDashboardEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerGridComponent } from './employer-grid.component';

describe('EmployerGridComponent', () => {
  let component: EmployerGridComponent;
  let fixture: ComponentFixture<EmployerGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerMapComponent } from './employer-map.component';

describe('EmployerMapComponent', () => {
  let component: EmployerMapComponent;
  let fixture: ComponentFixture<EmployerMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

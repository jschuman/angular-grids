import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridDashboardComponent } from './ag-grid-dashboard.component';

describe('AgGridDashboardComponent', () => {
  let component: AgGridDashboardComponent;
  let fixture: ComponentFixture<AgGridDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgGridDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDashboardComponent } from './primeng-dashboard.component';

describe('PrimengDashboardComponent', () => {
  let component: PrimengDashboardComponent;
  let fixture: ComponentFixture<PrimengDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

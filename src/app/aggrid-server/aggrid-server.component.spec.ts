import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridServerComponent } from './aggrid-server.component';

describe('AggridServerComponent', () => {
  let component: AggridServerComponent;
  let fixture: ComponentFixture<AggridServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggridServerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AggridServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridComponent } from './aggrid-client.component';

describe('AggridComponent', () => {
  let component: AggridComponent;
  let fixture: ComponentFixture<AggridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AggridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

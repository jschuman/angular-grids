import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengServerComponent } from './primeng-server.component';

describe('PrimengServerComponent', () => {
  let component: PrimengServerComponent;
  let fixture: ComponentFixture<PrimengServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengServerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

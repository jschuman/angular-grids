import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengClientComponent } from './primeng-client.component';

describe('PrimengClientComponent', () => {
  let component: PrimengClientComponent;
  let fixture: ComponentFixture<PrimengClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

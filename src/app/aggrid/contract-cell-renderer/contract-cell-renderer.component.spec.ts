import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCellRendererComponent } from './contract-cell-renderer.component';

describe('ContractCellRendererComponent', () => {
  let component: ContractCellRendererComponent;
  let fixture: ComponentFixture<ContractCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractCellRendererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

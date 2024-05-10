import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-contract-cell-renderer',
  standalone: true,
  imports: [],
  templateUrl: './contract-cell-renderer.component.html',
  styleUrl: './contract-cell-renderer.component.css'
})
export class ContractCellRendererComponent implements ICellRendererAngularComp {

  agInit(params: ICellRendererParams<any, any, any>): void {
    
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }
}

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { IButtonCellParams } from '../../interfaces';

@Component({
  selector: 'app-button-cell-renderer',
  standalone: true,
  imports: [],
  templateUrl: './button-cell-renderer.component.html',
  styleUrl: './button-cell-renderer.component.css'
})
export class ButtonCellRendererComponent implements ICellRendererAngularComp{

  value: any;
  color: any;

  agInit(params: ICellRendererParams & IButtonCellParams): void {
    this.value = params.value;
    this.color = params.color;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
  
}

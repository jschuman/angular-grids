import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { AggridClientComponent } from '../aggrid-client/aggrid-client.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contract-cell-renderer',
  standalone: true,
  imports: [],
  templateUrl: './contract-cell-renderer.component.html',
  styleUrl: './contract-cell-renderer.component.css'
})
export class ContractCellRendererComponent implements ICellRendererAngularComp {

  componentParent?: AggridClientComponent;
  rowNumber: number = 0;

  constructor(private router: Router) { }

  agInit(params: any): void {
    this.componentParent = params.context.parentGrid;
    this.rowNumber = params.rowNumber;
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  onButtonClicked() {
    console.log("button clicked from cell renderer");
    this.componentParent?.sayHello(this.rowNumber);
    this.router.navigate(['/custom-form']);
  }

}

import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
  selector: 'app-aggrid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './aggrid.component.html',
  styleUrl: './aggrid.component.css'
})

export class AggridComponent {
  // Row Data: The data to be displayed.
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  CurrencyFormatter = (params: { value: any; }) => {
    return `$${params.value}`;
  }

  columnTypes = {
    currency: { 
        width: 150,
        valueFormatter: this.CurrencyFormatter
    },
  };

  defaultColDef: ColDef = {
    minWidth: 150,
    filter: "agTextColumnFilter"
  }

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { headerName: "Make & Model", valueGetter: p => `${p.data.make} ${p.data.model}` },
    { field: "model"},
    { field: "price", type: 'currency' },
    { field: "electric" }
  ];
}

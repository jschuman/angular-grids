import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, GridReadyEvent, ICellRendererParams, GridApi } from 'ag-grid-community'; // Column Definition Type Interface
import { IButtonCellParams, IOlympicData } from '../../../interfaces';
import { ButtonCellRendererComponent } from '../button-cell-renderer/button-cell-renderer.component';
import { ContractCellRendererComponent } from '../contract-cell-renderer/contract-cell-renderer.component';
import { YearFilter } from '../year-filter/year-filter.component';
import data from "../../../assets/data.json";
import { MultiSelectFilterComponent } from '../multi-select-filter/multi-select-filter.component';

@Component({
  selector: 'app-aggrid-client',
  standalone: true,
  imports: [AgGridAngular, HttpClientModule],
  templateUrl: './aggrid-client.component.html',
  styleUrl: './aggrid-client.component.css'
})

export class AggridClientComponent {

  context: any;

  private gridApi!: GridApi;

  // specify the locale text here
  localeText = {
    pageSizeSelectorLabel: 'Rows per Page',
    ariaPageSizeSelectorLabel: 'Rows per Page',
  }

  // Row Data: The data to be displayed.
  public rowData: any[] = data as any[];

  public defaultColDef: ColDef = {
    minWidth: 100,
    filter: true
  }

  // Column Definitions: Defines the columns to be displayed.
  public columnDefs: ColDef[] = [
    { 
      field: "athlete", 
      minWidth: 200,
      checkboxSelection: true,
      headerCheckboxSelection: true },
    {
      field: "age"
    },
    {
      field: "country",
      minWidth: 200,
      filter: MultiSelectFilterComponent,
      cellRenderer: (params: ICellRendererParams) => {
        return `<b>${params.value}</b>`;
      }
    },
    { field: "year", filter: YearFilter},
    { field: "sport", minWidth: 200, menuTabs: [] },
    { 
      field: "gold", 
      width: 30,
      cellRenderer: ButtonCellRendererComponent, 
      cellRendererParams: { 
        color: "gold" 
      } as IButtonCellParams
    },
    { 
      field: "silver", 
      width: 30,
      cellRenderer: ButtonCellRendererComponent, 
      cellRendererParams: { 
        color: "silver" 
      } as IButtonCellParams
    },
    { 
      field: "bronze", 
      width: 30,
      cellRenderer: ButtonCellRendererComponent, 
      cellRendererParams: { 
        color: "#CD7F32" 
      } 
    },
    { 
      headerName: "Actions", 
      cellRendererSelector: (params: ICellRendererParams) => {
        if (params.data.gold > 2){
          return { 
            component: ContractCellRendererComponent,
            params: {
              rowNumber: params.node.rowIndex
            }
          };
        }
        return {  }
      }  
    },
  ];

  // enables pagination in the grid
  public pagination = true;

  // sets 10 rows per page (default is 100)
  public paginationPageSize = 10;

  // allows the user to select the page size from a predefined list of page sizes
  public paginationPageSizeSelector = [10, 20, 50, 100];

  public rowSelection: "single" | "multiple" = "multiple";

  public sayHello(rowNumber: number) {
    console.log(`Hello from the parent component! ${this.rowData[rowNumber].athlete} was clicked.`)
  }

  constructor(private http: HttpClient) { 
    
    //setup context
    this.context = { parentGrid: this };

  }

  onFilterTextBoxChanged() {
    this.gridApi.setGridOption(
      "quickFilterText",
      (document.getElementById("filter-text-box") as HTMLInputElement).value,
    );
  }

  onBtnExportDataAsCsv() {
    this.gridApi.exportDataAsCsv();
  }

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.gridApi = params.api;
  }
}

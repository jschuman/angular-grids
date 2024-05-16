import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, GridReadyEvent, ICellRendererParams } from 'ag-grid-community'; // Column Definition Type Interface
import { IButtonCellParams, IOlympicData } from '../../../interfaces';
import { ButtonCellRendererComponent } from '../button-cell-renderer/button-cell-renderer.component';
import { ContractCellRendererComponent } from '../contract-cell-renderer/contract-cell-renderer.component';
import data from "../../../assets/data.json";

@Component({
  selector: 'app-aggrid-client',
  standalone: true,
  imports: [AgGridAngular, HttpClientModule],
  templateUrl: './aggrid-client.component.html',
  styleUrl: './aggrid-client.component.css'
})

export class AggridClientComponent {

  context: any;

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
      filter: false,
      cellRenderer: (params: ICellRendererParams) => {
        return `Custom: <b>${params.value}</b>`;
      }
    },
    { field: "year" },
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
          return { component: ContractCellRendererComponent};
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

  public sayHello() {
    console.log('Hello from the parent component!')
  }

  constructor(private http: HttpClient) { 
    
    //setup context
    this.context = { parentGrid: this };

  }

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    
    // this.http
    //   .get<
    //     IOlympicData[]
    //   >("https://www.ag-grid.com/example-assets/olympic-winners.json")
    //   .subscribe((data) => (this.rowData = data));
    
  }
}

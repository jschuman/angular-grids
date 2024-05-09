import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, GridReadyEvent } from 'ag-grid-community'; // Column Definition Type Interface
import { IOlympicData } from '../../interfaces';


@Component({
  selector: 'app-aggrid',
  standalone: true,
  imports: [AgGridAngular, HttpClientModule],
  templateUrl: './aggrid.component.html',
  styleUrl: './aggrid.component.css'
})

export class AggridComponent {

  // Row Data: The data to be displayed.
  public rowData!: IOlympicData[];

  public defaultColDef: ColDef = {
    minWidth: 100,
    filter: true
  }

  // Column Definitions: Defines the columns to be displayed.
  public columnDefs: ColDef[] = [
    { field: "athlete", minWidth: 200 },
    {
      field: "age"
    },
    {
      field: "country",
      minWidth: 200,
    },
    { field: "year" },
    { field: "sport", minWidth: 200, menuTabs: [] },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ];

  // enables pagination in the grid
  public pagination = true;

  // sets 10 rows per page (default is 100)
  public paginationPageSize = 10;

  // allows the user to select the page size from a predefined list of page sizes
  public paginationPageSizeSelector = [10, 20, 50, 100];

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<
        IOlympicData[]
      >("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe((data) => (this.rowData = data));
  }
}

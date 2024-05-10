import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { 
  ColDef, 
  GridReadyEvent,
  FilterChangedEvent, 
  RowModelType, 
  GetRowIdFunc,
  GetRowIdParams,
  ICellRendererParams } from 'ag-grid-community'; // Column Definition Type Interface

import { FakeServer } from '../../fakeServer';
import { IOlympicDataWithId } from '../../interfaces';

@Component({
  selector: 'app-aggrid-server',
  standalone: true,
  imports: [AgGridAngular, HttpClientModule],
  templateUrl: './aggrid-server.component.html',
  styleUrl: './aggrid-server.component.css'
})
export class AggridServerComponent {

  public rowModelType: RowModelType = 'infinite';

  // Row Data: The data to be displayed.
  public rowData!: IOlympicDataWithId[];

  public defaultColDef: ColDef = {
    minWidth: 100,
    filter: true,
    floatingFilter: true
  }

  public columnDefs: ColDef[] = [
    // this row just shows the row index, doesn't use any data from the row
    {
      headerName: "ID",
      maxWidth: 100,
      valueGetter: "node.id",
      cellRenderer: (params: ICellRendererParams) => {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return '<img src="https://www.ag-grid.com/example-assets/loading.gif">';
        }
      },
      // we don't want to sort by the row index, this doesn't make sense as the point
      // of the row index is to know the row index in what came back from the server
      sortable: false,
      filter: false
    },
    { field: "athlete", minWidth: 190 },
    { field: "age", filter: "agNumberColumnFilter" },
    { field: "year", filter: false },
    { field: "sport", filter: false },
    { field: "gold", filter: false },
    { field: "silver", filter: false },
    { field: "bronze", filter: false },
  ];

  public pagination = true;
  public paginationPageSize = 100;
  public paginationPageSizeSelector = [10, 20, 50, 100];

  public cacheBlockSize = 200;
  public maxConcurrentDatasourceRequests = 2;
  public infiniteInitialRowCount = 1;
  public maxBlocksInCache = 2;
  public cacheOverflowSize = 2;


  public getRowId: GetRowIdFunc = (params: GetRowIdParams) => {
    return params.data.id;
  };


  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<IOlympicDataWithId>) {
    this.http
      .get<
      IOlympicDataWithId[]
      >("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe((data) => {
        data.forEach(function (d: any, index: number) {
          d.id = "R" + (index + 1);
        });
        
        // setup the fake server with entire dataset
        let fakeServer = FakeServer(data);

        // register the datasource with the grid
        params.api!.setGridOption("datasource", fakeServer);
      });
  }

}

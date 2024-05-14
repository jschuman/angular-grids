import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TableModule, TableLazyLoadEvent } from 'primeng/table';
import { IOlympicData } from '../../interfaces';
import { DataService } from '../../dataService';


@Component({
  selector: 'app-primeng-server',
  standalone: true,
  imports: [TableModule, NgFor, NgIf],
  templateUrl: './primeng-server.component.html',
  styleUrl: './primeng-server.component.css'
})
export class PrimengServerComponent {

  rowData: IOlympicData[] = [];
  totalRecords: number = 0;
  loading: boolean = true;

  // declare an array of objects with each objecthaving a string header property
  public cols: { header: string, field: string, sort?: boolean }[] = [
    { header: "Athlete", field: "athlete", sort: true },
    { header: "Age", field: "age" },
    { header: "Country", field: "country" },
    { header: "Year", field: "year" },
    { header: "Sport", field: "sport", sort: false },
    { header: "Gold", field: "gold" },
    { header: "Silver", field: "silver" },
    { header: "Bronze", field: "bronze" },
  ];

  //set up initial sort by age, ascending
  public sortField: string = "age";
  public sortOrder: number = 1;

  constructor() { }

  loadData(event: TableLazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
        let dataService: any = DataService();
        let result = dataService.getData({lazyEvent: JSON.stringify(event)});
          
        this.rowData = result.data;
        this.totalRecords = result.totalRecords;
        this.loading = false;
    }, 1000);
  }

}

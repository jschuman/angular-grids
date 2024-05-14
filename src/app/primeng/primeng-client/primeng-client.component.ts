import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TableModule } from 'primeng/table';
import data from "../../../assets/data.json";
import { IOlympicData } from '../../../interfaces';
import { MedalComponent } from '../../medal/medal.component';
import { ContractComponent } from '../../contract/contract.component';

@Component({
  selector: 'app-primeng-client',
  standalone: true,
  imports: [TableModule, NgFor, NgIf, MedalComponent, ContractComponent],
  templateUrl: './primeng-client.component.html',
  styleUrl: './primeng-client.component.css'
})


export class PrimengClientComponent {

  public rowData: IOlympicData[] = data as IOlympicData[];

  // declare an array of objects with each objecthaving a string header property
  public cols: { header: string, field: string, sort?: boolean, customRenderer?: string }[] = [
    { header: "Athlete", field: "athlete", sort: true},
    { header: "Age", field: "age" },
    { header: "Country", field: "country" },
    { header: "Year", field: "year" },
    { header: "Sport", field: "sport", sort: false },
    { header: "Gold", field: "gold", customRenderer: "medal" },
    { header: "Silver", field: "silver", customRenderer: "medal" },
    { header: "Bronze", field: "bronze", customRenderer: "medal" },
  ];

  //set up initial sort by age, ascending
  public sortField: string = "age";
  public sortOrder: number = 1;


}

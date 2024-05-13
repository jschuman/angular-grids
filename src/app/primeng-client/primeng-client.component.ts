import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import data from "../../assets/data.json";
import { IOlympicData } from '../../interfaces';

@Component({
  selector: 'app-primeng-client',
  standalone: true,
  imports: [TableModule, NgFor, NgIf, IconFieldModule, InputIconModule],
  templateUrl: './primeng-client.component.html',
  styleUrl: './primeng-client.component.css'
})


export class PrimengClientComponent {

  public rowData: IOlympicData[] = data as IOlympicData[];

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


}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IFilterAngularComp } from 'ag-grid-angular';
import { IFilterParams, IDoesFilterPassParams } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
  selector: 'app-year-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './year-filter.component.html',
  styleUrl: './year-filter.component.css'
})

export class YearFilter implements IFilterAngularComp {
  params!: IFilterParams;
  year = 'All';

  agInit(params: IFilterParams): void {
    this.params = params;
  }

  isFilterActive(): boolean {
    return this.year != 'All'
  }

  doesFilterPass(params: IDoesFilterPassParams): boolean {
    return params.data.year == this.year;
  }

  getModel() {
  }

  setModel(model: any) {
  }

  updateFilter() {
    this.params.filterChangedCallback();
  }
}
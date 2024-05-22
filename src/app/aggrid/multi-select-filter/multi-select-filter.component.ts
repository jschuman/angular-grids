import { Component, OnInit } from '@angular/core';
import { IFilterAngularComp } from 'ag-grid-angular';
import { IDoesFilterPassParams, IFilterParams } from 'ag-grid-community';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multi-select-filter',
  standalone: true,
  templateUrl: './multi-select-filter.component.html',
  styleUrls: ['./multi-select-filter.component.css'],
  imports: [ FormsModule, CommonModule],
})
export class MultiSelectFilterComponent implements OnInit, IFilterAngularComp {
  private params!: IFilterParams;
  filterOptions: any[] = [
    { label: 'Japan', value: 'Japan', selected: false },
    { label: 'France', value: 'France', selected: false },
    { label: 'Great Britain', value: 'Great Britain', selected: false }
  ];

  constructor() { }

  ngOnInit(): void { }

  agInit(params: IFilterParams): void {
    this.params = params;
  }

  isFilterActive(): boolean {
    return this.filterOptions.some(option => option.selected);
  }

  doesFilterPass(params: IDoesFilterPassParams): boolean {
    const selectedValues = this.filterOptions.filter(option => option.selected).map(option => option.value);
    const value = this.params.getValue(params.node);
    return selectedValues.includes(value);
  }

  getModel(): any {
    return this.filterOptions.filter(option => option.selected).map(option => option.value);
  }

  setModel(model: any): void {
    this.filterOptions.forEach(option => {
      option.selected = model ? model.includes(option.value) : false;
    });
  }

  onFilterChanged(): void {
    this.params.filterChangedCallback();
  }
}

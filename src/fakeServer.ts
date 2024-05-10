import { IOlympicDataWithId } from "./interfaces";
import { SortModelItem, IDatasource, IGetRowsParams } from 'ag-grid-community'; // Column Definition Type Interface

// Supports the server side pagination example
export function FakeServer(allData: IOlympicDataWithId[]): IDatasource {
    let sortAndFilter = (allOfTheData: any[], sortModel: SortModelItem[], filterModel: any) => {
        return sortData(sortModel, filterData(filterModel, allOfTheData));
    };

    let sortData = (sortModel: SortModelItem[], data: any[]) => {
        const sortPresent = sortModel && sortModel.length > 0;
        if (!sortPresent) {
          return data;
        }
        // do an in memory sort of the data, across all the fields
        const resultOfSort = data.slice();
        resultOfSort.sort(function (a, b) {
          for (let k = 0; k < sortModel.length; k++) {
            const sortColModel = sortModel[k];
            const valueA = a[sortColModel.colId];
            const valueB = b[sortColModel.colId];
            // this filter didn't find a difference, move onto the next one
            if (valueA == valueB) {
              continue;
            }
            const sortDirection = sortColModel.sort === "asc" ? 1 : -1;
            if (valueA > valueB) {
              return sortDirection;
            } else {
              return sortDirection * -1;
            }
          }
          // no filters found a difference
          return 0;
        });
        return resultOfSort;
      }
      
    let filterData = (filterModel: any, data: any[]) => {
        const filterPresent = filterModel && Object.keys(filterModel).length > 0;
        if (!filterPresent) {
            return data;
        }
        const resultOfFilter = [];
        for (let i = 0; i < data.length; i++) {
            const item = data[i];

            //athlete name
            if (filterModel.athlete) {
                const athlete = item.athlete;
                const filterAthlete = filterModel.athlete.filter.toLowerCase();

                //only support Contains for now
                if (filterModel.athlete.type == "contains"){
                    if (!item.athlete.toLowerCase().includes(filterAthlete)) {
                        continue;
                    }
                }
            }
            if (filterModel.age) {
                const age = item.age;
                const allowedAge = parseInt(filterModel.age.filter);
                if (filterModel.age.type == "equals") {
                    if (age !== allowedAge) {
                        continue;
                    }
                } else if (filterModel.age.type == "lessThan") {
                    if (age >= allowedAge) {
                        continue;
                    }
                } else {
                    if (age <= allowedAge) {
                        continue;
                    }
                }
            }
            
            resultOfFilter.push(item);
        }
        return resultOfFilter;
    }
      
    return {
        rowCount: undefined, // behave as infinite scroll

        getRows: (params: IGetRowsParams) => {
            console.log("asking for " + params.startRow + " to " + params.endRow);
            
            // At this point in your code, you would call the server.
            // To make the demo look real, wait for 500ms before returning
            setTimeout(() => {
                // take a slice of the total rows
                const dataAfterSortingAndFiltering = sortAndFilter(
                    allData,
                    params.sortModel,
                    params.filterModel,
                );
                const rowsThisPage = dataAfterSortingAndFiltering.slice(
                    params.startRow,
                    params.endRow,
                );
                // if on or after the last page, work out the last row.
                // since we know all the filtered data, set the lastRow here so the pagination control shows the total number of records and pages
                let lastRow = dataAfterSortingAndFiltering.length;
                
                // if (dataAfterSortingAndFiltering.length <= params.endRow) {
                //     lastRow = dataAfterSortingAndFiltering.length;
                // }
                // call the success callback
                params.successCallback(rowsThisPage, lastRow);
            }, 500);
        }
    }
}


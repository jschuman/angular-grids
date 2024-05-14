import { IOlympicDataWithId } from "./interfaces";
import data from "./assets/data.json";

// Supports the server side pagination example
export function DataService() {
    let sortAndFilter = (allOfTheData: any[], params: any) => {
        return sortData(params, filterData(params, allOfTheData));
    };

    let sortData = (params: any, data: any[]) => {
        const sortPresent = params.sortField && params.sortOrder;
        if (!sortPresent) {
          return data;
        }
        // do an in memory sort of the data, across all the fields
        const resultOfSort = data.slice();
        resultOfSort.sort(function (a, b) {
            const valueA = a[params.sortField];
            const valueB = b[params.sortField];
            
            const sortDirection = params.sortOrder;
            if (valueA > valueB) {
                return sortDirection;
            } else {
                return sortDirection * -1;
            }
        });

        return resultOfSort;
      }
      
    let filterData = (params: any, data: any[]) => {
        const filterPresent = params.filters && Object.keys(params.filters).length > 0;
        if (!filterPresent) {
            return data;
        }
        const resultOfFilter = [];
        for (let i = 0; i < data.length; i++) {
            const item = data[i];

            //athlete name
            if (params.filters.athlete.value) {
                const athlete = item.athlete;
                const filterAthlete = params.filters.athlete.value.toLowerCase();

                //support contains and startsWith for now
                if (params.filters.athlete.matchMode == "startsWith"){
                    if (!item.athlete.toLowerCase().startsWith(filterAthlete)) {
                        continue;
                    }
                }
                if (params.filters.athlete.matchMode == "contains"){
                    if (!item.athlete.toLowerCase().includes(filterAthlete)) {
                        continue;
                    }
                }
            }
            
            resultOfFilter.push(item);
        }
        return resultOfFilter;
    }
      
    return {

        getData: (lazyEvent: any) => {
            let params = JSON.parse(lazyEvent.lazyEvent);
            
            const dataAfterSortingAndFiltering = sortAndFilter(
                data,
                params
            );
                
            return {
                data: dataAfterSortingAndFiltering,
                totalRecords: dataAfterSortingAndFiltering.length
            }
        }
    }
}


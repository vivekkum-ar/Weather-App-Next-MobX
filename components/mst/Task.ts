// Task.ts
import { types } from 'mobx-state-tree';
import { cast } from 'mobx-state-tree';
// import {data} from "../../app/api/main/route" 
export const tableModel = types.model({
  city: types.string,
  country: types.string,
  population: types.number,  
  timezone: types.string,
  coordinates_lon: types.number,
  coordinates_lat: types.number,
  country_code: types.string,
  elevation: types.number,
  dem: types.number,
  last_modified: types.string,
});
export const mainModel = types
  .model({
    count: types.number,
    searchTerm: types.optional(types.string, ''),
    tableData: types.array(tableModel),
  })
  .actions(self => ({
    increment() {
      self.count++;
    },
    incrementBy(num: number) {
      self.count += num;
    },
    setSearchTerm(term: string) {
      self.searchTerm = term;
    },
    setTableData(data: any[]) {
      // Convert each item in the 'data' array to the 'tableModel' type and assign to 'self.tableData'
  self.tableData = cast(data);
    },
  }));
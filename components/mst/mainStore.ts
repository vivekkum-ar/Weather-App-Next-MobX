// Import mainModel and types from the required files
import { mainModel } from './Task';
import { types } from 'mobx-state-tree';

// Create and export a singleton instance of the store
export const mainStore = mainModel.create({
  count: 5,
  searchTerm: '',
});

// // Modifying mainStore
// mainStore.increment(); // Increment the count by 1
// mainStore.incrementBy(10); // Increment the count by 10
// mainStore.setSearchTerm(''); // Set the searchTerm to 'yourSearchTerm'

// Assuming you have data from an API or somewhere else that you want to set as tableData
const newData = [
  {
    city: "City1",
    country: "Country1",
    population: 1000,
    timezone: "UTC",
    coordinates_lon: 0,
    coordinates_lat: 0,
    country_code: "CC1",
    elevation: 0,
    dem: 0,
    last_modified: "2022-01-01",
  },
]; 
mainStore.setTableData(newData); // Set the tableData to the new data

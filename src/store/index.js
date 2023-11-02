import { configureStore } from "@reduxjs/toolkit";
import filterStoreReducer from "./filter";
import searchStoreReducer from "./search";
import sortStoreReducer from "./sort";

const store = configureStore({
  reducer: {
    filterStore: filterStoreReducer,
    searchStore: searchStoreReducer,
    sortStore: sortStoreReducer
  },
});
export default store;

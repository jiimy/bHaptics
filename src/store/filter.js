import { createSlice } from "@reduxjs/toolkit";

export const filterStoreSlice = createSlice({
  name: "filterStore",
  initialState: {
    data: [],
    resultData: 0,
  },
  reducers: {
    FILTER_TAG_ADD: (state, action) => {
      const { value, name } = action.payload;
      state.data = [...state.data, { value: value, name: name }];
    },
    FILTER_LENGTH: (state, action) => {
      state.resultData = action.payload;
    },
    FILTER_TAG_REMOVE: (state, action) => {
      const valueToRemove = action.payload;
      state.data = state.data.filter((item) => item.name !== valueToRemove);
    },
    FILTER_TAG_INIT: (state, action) => {
      state.data = [];
    }
  },
});

export const { FILTER_TAG_ADD, FILTER_TAG_REMOVE, FILTER_TAG_INIT, FILTER_LENGTH } = filterStoreSlice.actions;

export default filterStoreSlice.reducer;

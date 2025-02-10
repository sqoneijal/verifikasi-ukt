import { createSlice } from "@reduxjs/toolkit";

export const redux = createSlice({
   name: "redux",
   initialState: {
      init: {},
      module: {},
      position: [],
      filter: {},
      message: {},
   },
   reducers: {
      setInit: (state, { payload } = action) => {
         state.init = payload;
      },
      position: (state, { payload } = action) => {
         state.position = payload;
      },
      setModule: (state, { payload } = action) => {
         state.module = payload;
      },
      setFilter: (state, { payload } = action) => {
         state.filter = payload;
      },
      setMessage: (state, { payload } = action) => {
         state.message = payload;
      },
   },
});
export const { init, setInit, setModule, position, setFilter, setMessage } = redux.actions;
export default redux.reducer;

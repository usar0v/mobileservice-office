import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {gamesIncome, phonesIncome, programsIncome, totalIncome} from "../../service/reportService";


interface reportType {
  sum: number;
  gamesSum: number;
  programsSum: number;
  phonesSum: number;
}

const initialState: reportType = {
  sum: 0,
  gamesSum: 0,
  programsSum: 0,
  phonesSum: 0,
}

const reportSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {},
  extraReducers: {
    [totalIncome.fulfilled.type]: (state, {payload}: PayloadAction<number>) => {
      state.sum = payload;
    },
    [programsIncome.fulfilled.type]: (state, {payload}: PayloadAction<number>) => {
      state.programsSum = payload;
    },
    [gamesIncome.fulfilled.type]: (state, {payload}: PayloadAction<number>) => {
      state.gamesSum = payload;
    },
    [phonesIncome.fulfilled.type]: (state, {payload}: PayloadAction<number>) => {
      state.phonesSum = payload;
    },
  }
});

export default reportSlice.reducer;
export const {} = reportSlice.actions;

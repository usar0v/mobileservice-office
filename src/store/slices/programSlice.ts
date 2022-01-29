import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IService} from "../../models/IService";
import {getPrograms} from "../../service/programService";


interface programType {
  programs: IService[];
  isLoading: boolean;
}

const initialState: programType = {
  programs: [],
  isLoading: false,
}

const programSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {},
  extraReducers: {
    [getPrograms.pending.type]: state => {
      state.isLoading = true;
    },
    [getPrograms.fulfilled.type]: (state, {payload}: PayloadAction<IService[]>) => {
      state.isLoading = false;
      state.programs = payload
    },
  }
});

export default programSlice.reducer;

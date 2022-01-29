import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IService} from "../../models/IService";
import {getPhones} from "../../service/phoneService";


interface phoneType {
  phones: IService[];
  isLoading: boolean;
}

const initialState: phoneType = {
  phones: [],
  isLoading: false,
}

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {},
  extraReducers: {
    [getPhones.pending.type]: state => {
      state.isLoading = true;
    },
    [getPhones.fulfilled.type]: (state, action: PayloadAction<IService[]>) => {
      state.isLoading = false;
      state.phones = action.payload
    },
  }
});

export default phoneSlice.reducer;

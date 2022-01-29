import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBrand} from "../../models/IBrand";
import {getGamesBrand, getPhonesBrand, getProgramsBrand} from "../../service/brandService";



interface brandType {
  programsBrand: IBrand[];
  gamesBrand: IBrand[];
  phonesBrand: IBrand[];
}

const initialState: brandType = {
  programsBrand: [],
  gamesBrand: [],
  phonesBrand: [],
}

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: {
    [getPhonesBrand.fulfilled.type]: (state, action: PayloadAction<IBrand[]>) => {
      state.phonesBrand = action.payload;
    },
    [getGamesBrand.fulfilled.type]: (state, action: PayloadAction<IBrand[]>) => {
      state.gamesBrand = action.payload;
    },
    [getProgramsBrand.fulfilled.type]: (state, action: PayloadAction<IBrand[]>) => {
      state.programsBrand = action.payload;
    },
  }
});

export default brandSlice.reducer;
export const {} = brandSlice.actions

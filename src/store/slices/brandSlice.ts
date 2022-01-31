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
  reducers: {
    deleteBrand(state, {payload}: PayloadAction<any>) {
      if (payload.type === 'phone') {
        state.phonesBrand = state.phonesBrand.filter(v => v.id !== payload.id)
      }else if (payload.type === 'program') {
        state.programsBrand = state.programsBrand.filter(v => v.id !== payload.id)
      }else if (payload.type === 'game') {
        state.gamesBrand = state.gamesBrand.filter(v => v.id !== payload.id)
      }
    }
  },
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
export const {deleteBrand} = brandSlice.actions;

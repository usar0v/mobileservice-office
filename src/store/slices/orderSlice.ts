import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IOrderedPhone} from "../../models/IOrder";
import {changePhoneStatus, getOrderedPhones} from "../../service/orderService";


interface IOrderSlice {
  orderedPhones: IOrderedPhone[],
  loading: boolean;
  changeStatusLoading: boolean;
}

const initialState: IOrderSlice = {
  orderedPhones: [],
  loading: false,
  changeStatusLoading: false,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: {
    [getOrderedPhones.pending.type]: (state) => {
      state.loading = true;
    },
    [getOrderedPhones.fulfilled.type]: (state, {payload}: PayloadAction<IOrderedPhone[]>) => {
      state.loading = false;
      state.orderedPhones = payload;
    },
    [changePhoneStatus.pending.type]: (state) => {
      state.changeStatusLoading = true;
    },
    [changePhoneStatus.fulfilled.type]: (state, {payload}: PayloadAction<IOrderedPhone>) => {
      state.changeStatusLoading = false;
      state.orderedPhones = state.orderedPhones.map(phone => {
        if (phone.id === payload.id) return payload;
        return  phone;
      });
    }
  }
})

export default orderSlice.reducer;
export const {} = orderSlice.actions;
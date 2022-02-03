import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IOrderedPhone, IOrderedProgram} from "../../models/IOrder";
import {changePhoneStatus, changeProgramStatus, getOrderedPhones, getOrderedPrograms} from "../../service/orderService";


interface IOrderSlice {
  orderedPhones: IOrderedPhone[];
  orderedPrograms: IOrderedProgram[];
  getOrderedPhonesLoading: boolean;
  getOrderedProgramsLoading: boolean;
  changeStatusLoading: boolean;
}

const initialState: IOrderSlice = {
  orderedPhones: [],
  orderedPrograms: [],
  getOrderedPhonesLoading: false,
  getOrderedProgramsLoading: false,
  changeStatusLoading: false,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: {
    [getOrderedPhones.pending.type]: (state) => {
      state.getOrderedPhonesLoading = true;
    },
    [getOrderedPhones.fulfilled.type]: (state, {payload}: PayloadAction<IOrderedPhone[]>) => {
      state.getOrderedPhonesLoading = false;
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
    },
    [getOrderedPrograms.pending.type]: (state) => {
      state.getOrderedProgramsLoading = true;
    },
    [getOrderedPrograms.fulfilled.type]: (state, {payload}: PayloadAction<IOrderedProgram[]>) => {
      state.getOrderedProgramsLoading = false;
      state.orderedPrograms = payload;
    },
    [changeProgramStatus.pending.type]: (state) => {
      state.changeStatusLoading = true;
    },
    [changeProgramStatus.fulfilled.type]: (state, {payload}: PayloadAction<IOrderedProgram>) => {
      state.changeStatusLoading = false;
      state.orderedPrograms = state.orderedPrograms.map(program => {
        if (program.id === payload.id) return payload;
        return  program;
      });
    }
  }
})

export default orderSlice.reducer;
export const {} = orderSlice.actions;
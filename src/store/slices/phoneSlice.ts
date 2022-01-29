import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IService, IServiceItem} from "../../models/IService";
import {getPhones} from "../../service/phoneService";


interface phoneType {
  phones: IService[];
  isLoading: boolean;
  currentModalVisible: boolean;
  currentService: IServiceItem | any;
}

const initialState: phoneType = {
  phones: [],
  isLoading: false,
  currentModalVisible: false,
  currentService: {},
}

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    showUpdateModal (state, {payload}: PayloadAction<IServiceItem>) {
      state.currentService = payload;
      state.currentModalVisible = true;
    },
    closeUpdateModal (state) {
      state.currentModalVisible = false;
    },
  },
  extraReducers: {
    [getPhones.pending.type]: state => {
      state.isLoading = true;
    },
    [getPhones.fulfilled.type]: (state, {payload}: PayloadAction<IService[]>) => {
      state.isLoading = false;
      state.phones = payload
    },
  }
});

export default phoneSlice.reducer;
export const {showUpdateModal, closeUpdateModal} = phoneSlice.actions;

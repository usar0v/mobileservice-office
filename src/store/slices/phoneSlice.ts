import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IService, IServiceItem} from "../../models/IService";
import {deletePhone, getPhones, updatePhone} from "../../service/phoneService";
import {successMessage} from "../../utils/messages";


interface phoneType {
  phones: IService[];
  isLoading: boolean;
  currentModalVisible: boolean;
  currentPhone?: IServiceItem | any;
  updateLoading: boolean;
}

const initialState: phoneType = {
  phones: [],
  isLoading: false,
  currentModalVisible: false,
  currentPhone: {},
  updateLoading: false,
}

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    showUpdatePhoneModal(state, {payload}: PayloadAction<IServiceItem>) {
      state.currentPhone = payload;
      state.currentModalVisible = true;
    },
    closeUpdatePhoneModal(state) {
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
    [updatePhone.pending.type]: (state) => {
      state.updateLoading = true;
    },
    [updatePhone.fulfilled.type]: (state, {payload}: PayloadAction<IServiceItem>) => {
      state.phones = state.phones.map(item => {
        const items = item.items.map(v => {
          if (v.id == payload.id) return payload;
          return v;
        })
        item.items = items;
        return item;
      })
      state.updateLoading = false;
      state.currentModalVisible = false;
      successMessage('Телефон успешно изменен');
    },
    [deletePhone.fulfilled.type]: (state, {payload}: PayloadAction<number>) => {
      state.phones = state.phones.map(item => {
        item.items = item.items.filter(v => v.id !== payload)
        return item
      })
      successMessage('Телефон успешно удален');
    }
  }
});

export default phoneSlice.reducer;
export const {showUpdatePhoneModal, closeUpdatePhoneModal} = phoneSlice.actions;

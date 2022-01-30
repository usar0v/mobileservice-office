import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IService, IServiceItem} from "../../models/IService";
import {deleteProgram, getPrograms, updateProgram} from "../../service/programService";
import {successMessage} from "../../utils/messages";


interface programType {
  programs: IService[];
  isLoading: boolean;
  currentModalVisible: boolean;
  currentProgram: IServiceItem | any;
  updateLoading: boolean;
}

const initialState: programType = {
  programs: [],
  isLoading: false,
  currentModalVisible: false,
  currentProgram: {},
  updateLoading: false,
}

const programSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
    showUpdateProgramModal(state, {payload}: PayloadAction<IServiceItem>) {
      state.currentProgram = payload;
      state.currentModalVisible = true;
    },
    closeUpdateProgramModal(state) {
      state.currentModalVisible = false;
    },
  },
  extraReducers: {
    [getPrograms.pending.type]: state => {
      state.isLoading = true;
    },
    [getPrograms.fulfilled.type]: (state, {payload}: PayloadAction<IService[]>) => {
      state.isLoading = false;
      state.programs = payload
    },
    [updateProgram.pending.type]: (state) => {
      state.updateLoading = true;
    },
    [updateProgram.fulfilled.type]: (state, {payload}: PayloadAction<IServiceItem>) => {
      state.programs = state.programs.map(item => {
        const items = item.items.map(v => {
          if (v.id == payload.id) return payload;
          return v;
        })
        item.items = items;
        return item;
      })
      state.updateLoading = false;
      state.currentModalVisible = false;
      successMessage('Программа успешно изменен');
    },
    [deleteProgram.fulfilled.type]: (state, {payload}: PayloadAction<number>) => {
      state.programs = state.programs.map(item => {
        item.items = item.items.filter(v => v.id !== payload)
        return item
      })
      successMessage('Программа успешно удален');
    }
  }
});

export default programSlice.reducer;
export const {showUpdateProgramModal, closeUpdateProgramModal} = programSlice.actions;

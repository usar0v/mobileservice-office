import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IOrderedGame, IOrderedPhone, IOrderedProgram} from "../../models/IOrder";
import {
  changeGameStatus,
  changePhoneStatus,
  changeProgramStatus, getOrderedGames,
  getOrderedPhones, getOrderedPrograms,
} from "../../service/orderService";


interface IOrderSlice {
  orderedPhones: IOrderedPhone[];
  orderedPrograms: IOrderedProgram[];
  orderedGames: IOrderedGame[];
  loading: boolean;
  changeStatusLoading: boolean;
}

const initialState: IOrderSlice = {
  orderedPhones: [],
  orderedPrograms: [],
  changeStatusLoading: false,
  loading: false,
  orderedGames: [],
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
    },
    [getOrderedPrograms.pending.type]: (state) => {
      state.loading = true;
    },
    [getOrderedPrograms.fulfilled.type]: (state, {payload}: PayloadAction<IOrderedProgram[]>) => {
      state.loading = false;
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
    },
    [getOrderedGames.pending.type]: (state) => {
      state.loading = true;
    },
    [getOrderedGames.fulfilled.type]: (state, {payload}: PayloadAction<IOrderedGame[]>) => {
      state.loading = false;
      state.orderedGames = payload;
    },
    [changeGameStatus.pending.type]: (state) => {
      state.changeStatusLoading = true;
    },
    [changeGameStatus.fulfilled.type]: (state, {payload}: PayloadAction<IOrderedGame>) => {
      state.changeStatusLoading = false;
      state.orderedGames = state.orderedGames.map(game => {
        if (game.id === payload.id) return payload;
        return  game;
      });
    },
  }
})

export default orderSlice.reducer;
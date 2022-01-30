import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IService, IServiceItem} from "../../models/IService";
import {deleteGame, getGames, updateGame} from "../../service/gameService";
import {deletePhone} from "../../service/phoneService";


interface gameType {
  games: IService[];
  isLoading: boolean;
  currentModalVisible: boolean;
  currentGame: IServiceItem | any;
  updateLoading: boolean;
}

const initialState: gameType = {
  games: [],
  isLoading: false,
  currentModalVisible: false,
  currentGame: {},
  updateLoading: false,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    showUpdateGameModal(state, {payload}: PayloadAction<IServiceItem>) {
      state.currentGame = payload;
      state.currentModalVisible = true;
    },
    closeUpdateGameModal(state) {
      state.currentModalVisible = false;
    },
  },
  extraReducers: {
    [getGames.pending.type]: state => {
      state.isLoading = true;
    },
    [getGames.fulfilled.type]: (state, {payload}: PayloadAction<IService[]>) => {
      state.isLoading = false;
      state.games = payload
    },
    [updateGame.pending.type]: (state) => {
      state.updateLoading = true;
    },
    [updateGame.fulfilled.type]: (state, {payload}: PayloadAction<IServiceItem>) => {
      state.games = state.games.map(item => {
        const items = item.items.map(v => {
          if (v.id == payload.id) return payload;
          return v;
        })
        item.items = items;
        return item;
      })
      state.updateLoading = false;
      state.currentModalVisible = false;
    },
    [deleteGame.fulfilled.type]: (state, {payload}: PayloadAction<number>) => {
      state.games = state.games.map(item => {
        item.items = item.items.filter(v => v.id !== payload)
        return item
      })
    }
  }
});

export default gameSlice.reducer;
export const {showUpdateGameModal, closeUpdateGameModal} = gameSlice.actions;


import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IService} from "../../models/IService";
import {getGames} from "../../service/gameService";


interface gameType {
  games: IService[];
  isLoading: boolean;
}

const initialState: gameType = {
  games: [],
  isLoading: false,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: {
    [getGames.pending.type]: state => {
      state.isLoading = true;
    },
    [getGames.fulfilled.type]: (state, action: PayloadAction<IService[]>) => {
      state.isLoading = false;
      state.games = action.payload
    },
  }
});

export default gameSlice.reducer;

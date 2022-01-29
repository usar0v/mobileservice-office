import {createAsyncThunk} from "@reduxjs/toolkit";
import requester from "../utils/requester";


export const getGames = createAsyncThunk(
  'game/getGames',
  async () => {
    const response = await requester.get(`brand/game`);
    return response;
  }
);

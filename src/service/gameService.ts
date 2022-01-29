import {createAsyncThunk} from "@reduxjs/toolkit";
import requester from "../utils/requester";


export const getGames = createAsyncThunk(
  'game/getGames',
  async () => {
    const response = await requester.get(`game`);
    return response;
  }
);

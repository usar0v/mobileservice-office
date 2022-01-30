import {createAsyncThunk} from "@reduxjs/toolkit";
import requester from "../utils/requester";
import {IServiceItem} from "../models/IService";


export const getGames = createAsyncThunk(
  'game/getGames',
  async () => {
    const response = await requester.get(`game`);
    return response;
  }
);

export const updateGame = createAsyncThunk(
  'game/updateGame',
  async (service: IServiceItem) => {
    const response = await requester.post('game/update',service);
    return response;
  }
);

export const deleteGame = createAsyncThunk(
  'game/removeGame',
  async (id: number) => {
    const response = await requester.post('game/delete', {id});
    return id;
  }
);

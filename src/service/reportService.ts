import {createAsyncThunk} from "@reduxjs/toolkit";
import requester from "../utils/requester";


export const totalIncome = createAsyncThunk(
  'report/totalIncome',
  async () => {
    const response = await requester.get(`sum`);
    return response;
  }
);

export const phonesIncome = createAsyncThunk(
  'report/phonesIncome',
  async () => {
    const response = await requester.get(`sum`,{
      type: 'phones'
    });
    return response;
  }
);

export const gamesIncome = createAsyncThunk(
  'report/gamesIncome',
  async () => {
    const response = await requester.get(`sum`,{
      type: 'games'
    });
    return response;
  }
);

export const programsIncome = createAsyncThunk(
  'report/programsIncome',
  async () => {
    const response = await requester.get(`sum`,{
      type: 'programs'
    });
    return response;
  }
);

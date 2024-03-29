import {createAsyncThunk} from "@reduxjs/toolkit";
import requester from "../utils/requester";


export const getPhonesBrand = createAsyncThunk(
  'brand/getPhonesBrand',
  async () => {
    const response = await requester.get(`brand`,{type: 'phone'});
    return response;
  }
);

export const getGamesBrand = createAsyncThunk(
  'brand/getGamesBrand',
  async () => {
    const response = await requester.get(`brand`, {type: 'game'});
    return response;
  }
);

export const getProgramsBrand = createAsyncThunk(
  'brand/getProgramsBrand',
  async () => {
    const response = await requester.get(`brand`, {type: 'program'});
    return response;
  }
);


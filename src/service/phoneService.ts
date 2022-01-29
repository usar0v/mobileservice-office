import {createAsyncThunk} from "@reduxjs/toolkit";
import requester from "../utils/requester";


export const getPhones = createAsyncThunk(
  'phone/getPhones',
  async () => {
    const response = await requester.get(`brand/phone`);
    return response;
  }
);

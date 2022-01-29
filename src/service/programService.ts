import {createAsyncThunk} from "@reduxjs/toolkit";
import requester from "../utils/requester";


export const getPrograms = createAsyncThunk(
  'program/getPrograms',
  async () => {
    const response = await requester.get(`program`);
    return response;
  }
);

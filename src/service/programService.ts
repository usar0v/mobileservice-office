import {createAsyncThunk} from "@reduxjs/toolkit";
import requester from "../utils/requester";


export const getProgram = createAsyncThunk(
  'program/getProgram',
  async () => {
    const response = await requester.get(`brand/program`);
    return response;
  }
);

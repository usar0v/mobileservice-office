import {createAsyncThunk} from "@reduxjs/toolkit";
import requester from "../utils/requester";
import {IServiceItem} from "../models/IService";


export const getPrograms = createAsyncThunk(
  'program/getPrograms',
  async () => {
    const response = await requester.get(`program`);
    return response;
  }
);

export const updateProgram = createAsyncThunk(
  'program/updateProgram',
  async (service: IServiceItem) => {
    const response = await requester.post('program/update',service);
    return response;
  }
);

export const deleteProgram = createAsyncThunk(
  'game/deleteProgram',
  async (id: number) => {
    const response = await requester.post('program/delete', {id});
    return id;
  }
);

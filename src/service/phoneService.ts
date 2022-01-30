import {createAsyncThunk} from "@reduxjs/toolkit";
import requester from "../utils/requester";
import {IServiceItem} from "../models/IService";


export const getPhones = createAsyncThunk(
  'phone/getPhones',
  async () => {
    const response = await requester.get(`phone`);
    return response;
  }
);

export const updatePhone = createAsyncThunk(
  'phone/updatePhone',
  async (service: IServiceItem) => {
    const response = await requester.post('phone/update', service);
    return response;
  }
);

export const deletePhone = createAsyncThunk(
  'game/deletePhone',
  async (id: number) => {
    const response = await requester.post('phone/delete', {id});
    return id;
  }
);

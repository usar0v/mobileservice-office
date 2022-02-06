import {createAsyncThunk} from "@reduxjs/toolkit";
import {ISiteService} from "../models/IService";
import requester from "../utils/requester";

export const addSiteService = createAsyncThunk(
  'setting/addSiteService',
  async (data: ISiteService) => {
    const service = requester.post('setting/service', data);
    return service;
  }
);

export const getAllSiteService = createAsyncThunk(
  'setting/getAllSiteService',
  async () => {
    const services = requester.get('setting/service');
    return services;
  }
)
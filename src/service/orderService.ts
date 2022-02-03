import {createAsyncThunk} from "@reduxjs/toolkit";
import requester from "../utils/requester";
import {IChangeServiceStatus} from "../models/IService";

export const getOrderedPhones = createAsyncThunk(
  'order/getOrderedPhones',
  async () => {
    const orderedPhones = requester.get('phone/order');
    return orderedPhones;
  }
);

export const changePhoneStatus = createAsyncThunk(
  'order/changePhoneStatus',
  async (data: IChangeServiceStatus) => {
    const phone = requester.post('phone/change_status', data);
    return phone;
  }
);

export const getOrderedPrograms = createAsyncThunk(
  'order/getOrderedPrograms',
  async () => {
    const orderedPrograms = requester.get('program/order');
    return orderedPrograms;
  }
);

export const changeProgramStatus = createAsyncThunk(
  'order/changeProgramStatus',
  async (data: IChangeServiceStatus) => {
    const program = requester.post('program/change_status', data);
    return program;
  }
);
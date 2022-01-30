import {createAsyncThunk} from "@reduxjs/toolkit";
import requester from "../utils/requester";
import {IAddBalance, IAddDiscount, IChangeUserRole} from "../models/IUser";

export const getAllUsers = createAsyncThunk(
  'user/getAllUsers',
  async () => {
    const users = requester.get('user');
    return users;
  }
);

export const changeRole = createAsyncThunk(
  'user/changeRole',
  async (data: IChangeUserRole) => {
   const user = await requester.post('user/role', data);
   return user;
  }
);

export const addBalance = createAsyncThunk(
  'user/addBalance',
  async (data: IAddBalance) => {
    const user = await requester.post('user/balance', data);
    return user;
  }
);

export const addDiscount = createAsyncThunk(
  'user/addDiscount',
  async (data: IAddDiscount) => {
    const user = await requester.post('user/discount', data);
    return user;
  }
);

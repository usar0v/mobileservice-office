import {createAsyncThunk} from "@reduxjs/toolkit";
import requester from "../utils/requester";

export const getAllUsers = createAsyncThunk(
  'user/getAllUsers',
  async () => {
    const users = requester.get('user');
    return users;
  }
)
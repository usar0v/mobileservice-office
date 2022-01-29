import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";
import {getAllUsers} from "../../service/userService";

interface IUserSlice {
  users: IUser[];
  currentUser: IUser | null;
  loading: boolean;
}

const initialState: IUserSlice = {
  users: [],
  currentUser: null,
  loading: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<number>) {
      state.currentUser = state.users.filter(item => item.id === action.payload)[0];
    }
  },
  extraReducers: {
    [getAllUsers.pending.type]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled.type]: (state, {payload}: PayloadAction<IUser[]>) => {
      state.users = payload;
      state.loading = false;
    }
  }
});

export default userSlice.reducer;
export const {setCurrentUser} = userSlice.actions;
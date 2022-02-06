import {createSlice} from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import storage from "../../utils/storage";
import {IUser} from "../../models/IUser";

interface UserType {
  user: IUser | null;
  token: string | null;
  isAuth: boolean;
}

const initialState: UserType = {
  user: null,
  token: null,
  isAuth: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, {payload}) {
      if (payload.token) {
        const token = payload.token;
        state.token = token;
        state.user = jwtDecode(token);
        state.isAuth = true;
        storage.set('token', token);
      }
    },
    signOut(state) {
      storage.remove('token');
      state.isAuth = false;
      state.token = null;
      state.user = null;
    },
  }
});

export default authSlice.reducer;
export const {setUser, signOut} = authSlice.actions

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";
import {addBalance, changeRole, getAllUsers} from "../../service/userService";

interface IUserSlice {
  users: IUser[];
  currentUser: IUser | null;
  loading: boolean;
  currentUserModal: boolean;
  changeRoleLoading: boolean;
  addBalanceLoading: boolean;
}

const initialState: IUserSlice = {
  users: [],
  currentUser: null,
  loading: false,
  currentUserModal: false,
  changeRoleLoading: false,
  addBalanceLoading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    showCurrentUserModal(state, {payload}: PayloadAction<IUser>) {
      state.currentUser = payload;
      state.currentUserModal = true;
    },
    hideCurrentUserModal(state) {
      state.currentUser = null;
      state.currentUserModal = false;
    }
  },
  extraReducers: {
    [getAllUsers.pending.type]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled.type]: (state, {payload}: PayloadAction<IUser[]>) => {
      state.users = payload;
      state.loading = false;
    },
    [changeRole.pending.type]: (state) => {
      state.changeRoleLoading = true;
    },
    [changeRole.fulfilled.type]: (state, {payload}: PayloadAction<IUser>) => {
      state.changeRoleLoading = false;
      state.users = state.users.map(item => {
        if (item.id === payload.id) return payload;
        return  item;
      });
      state.currentUser = payload;
    },
    [addBalance.pending.type]: (state) => {
      state.addBalanceLoading = true;
    },
    [addBalance.fulfilled.type]: (state, {payload}: PayloadAction<IUser>) => {
      state.addBalanceLoading = false;
      state.users = state.users.map(item => {
        if (item.id === payload.id) return payload;
        return  item;
      });
      state.currentUser = payload;
    }
  }
});

export default userSlice.reducer;
export const {
  showCurrentUserModal,
  hideCurrentUserModal
} = userSlice.actions;
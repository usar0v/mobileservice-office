import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";
import {addBalance, addDiscount, changeRole, getAllUsers} from "../../service/userService";

interface IUserSlice {
  users: IUser[];
  filterUsers: IUser[],
  currentUser: IUser | null;
  loading: boolean;
  currentUserModal: boolean;
  changeRoleLoading: boolean;
  addBalanceLoading: boolean;
  addDiscountLoading: boolean;
}

const initialState: IUserSlice = {
  users: [],
  filterUsers: [],
  currentUser: null,
  loading: false,
  currentUserModal: false,
  changeRoleLoading: false,
  addBalanceLoading: false,
  addDiscountLoading: false,
}

const setUserInUsers = (state: IUserSlice, payload: IUser) => {
  state.users = state.users.map(item => {
    if (item.id === payload.id) return payload;
    return item;
  });
  state.currentUser = payload;
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
    },
    setFilterUsers(state, {payload}: PayloadAction<string>) {
      state.filterUsers = state.users.filter(item => item.email.includes(payload));
    }
  },
  extraReducers: {
    [getAllUsers.pending.type]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled.type]: (state, {payload}: PayloadAction<IUser[]>) => {
      state.users = payload;
      state.loading = false;
      state.filterUsers = payload;
    },
    [changeRole.pending.type]: (state) => {
      state.changeRoleLoading = true;
    },
    [changeRole.fulfilled.type]: (state, {payload}: PayloadAction<IUser>) => {
      state.changeRoleLoading = false;
      setUserInUsers(state, payload);
    },
    [addBalance.pending.type]: (state) => {
      state.addBalanceLoading = true;
    },
    [addBalance.fulfilled.type]: (state, {payload}: PayloadAction<IUser>) => {
      state.addBalanceLoading = false;
      setUserInUsers(state, payload);
    },
    [addDiscount.pending.type]: (state) => {
      state.addDiscountLoading = true;
    },
    [addDiscount.fulfilled.type]: (state, {payload}: PayloadAction<IUser>) => {
      state.addDiscountLoading = false;
      setUserInUsers(state, payload);
    },
  }
});

export default userSlice.reducer;
export const {
  showCurrentUserModal,
  hideCurrentUserModal,
  setFilterUsers,
} = userSlice.actions;
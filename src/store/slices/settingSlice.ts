import {ISiteService} from "../../models/IService";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addSiteService, deleteSiteService, getAllSiteService} from "../../service/settingSerivce";


interface ISettingSlice {
  services: ISiteService[],
  loading: boolean,
}

const initialState: ISettingSlice = {
  services: [],
  loading: false,
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllSiteService.pending.type]: (state) => {
      state.loading = true;
    },
    [getAllSiteService.fulfilled.type]: (state, {payload}: PayloadAction<ISiteService[]>) => {
      state.loading = false;
      state.services = payload;
    },
    [addSiteService.pending.type]: (state) => {
      state.loading = true;
    },
    [addSiteService.fulfilled.type]: (state, {payload}: PayloadAction<ISiteService>) => {
      state.loading = false;
      state.services.push(payload);
    },
    [deleteSiteService.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteSiteService.fulfilled.type]: (state, {payload}: PayloadAction<number>) => {
      state.loading = false;
      state.services = state.services.filter(service => service.id !== payload);
    }
  }
});

export default settingSlice.reducer;
export const {} = settingSlice.actions;
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import brandReducer from './slices/brandSlice';
import phoneReducer from './slices/phoneSlice';
import gameReducer from './slices/gameSlice';
import programReducer from './slices/programSlice';
import orderReducer from './slices/orderSlice';
import reportReducer from "./slices/reportSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  brand: brandReducer,
  phone: phoneReducer,
  game: gameReducer,
  program: programReducer,
  order: orderReducer,
  report: reportReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

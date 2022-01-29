import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import brandReducer from './slices/brandSlice';
import phoneReducer from './slices/phoneSlice';
import gameReducer from './slices/gameSlice';
import programReducer from './slices/programSlice';


const rootReducer = combineReducers({
  user: userReducer,
  brand: brandReducer,
  phone: phoneReducer,
  game: gameReducer,
  program: programReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

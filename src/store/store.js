import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { foodsApi } from "./foodsApi";
  import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import persistConfig from "./persistConfig";
import orderSlice from "./orderSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  order: orderSlice,
  [foodsApi.reducerPath]: foodsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(foodsApi.middleware),
});

export const persistor = persistStore(store);
export default store;

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth/auth";
import message from "./auth/message";
import { productsApi } from "./services/products.api";
import { AllproductsApi } from "./services/productsAll.api";
const rootReducer = combineReducers({
  auth,
  message,
  [productsApi.reducerPath]: productsApi.reducer,
  [AllproductsApi.reducerPath]: AllproductsApi.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

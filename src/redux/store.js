import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/Todo/todoSlice";
import providerReducer from "./slice/Providers/providersSlice";
import providerNameReducer from "./slice/ProviderName/providerNameSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    providers: providerReducer,
    providerName: providerNameReducer,
  },
});

export default store;

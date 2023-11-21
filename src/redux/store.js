import { configureStore } from "@reduxjs/toolkit";
import providerReducer from "./slice/Providers/providersSlice";
import providerNameReducer from "./slice/ProviderName/providerNameSlice";

const store = configureStore({
  reducer: {
    providers: providerReducer,
    providerName: providerNameReducer,
  },
});

export default store;

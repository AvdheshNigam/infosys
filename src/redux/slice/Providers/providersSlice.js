import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProviders = createAsyncThunk("fetchProviders", async () => {
  const res = await fetch("https://api.apis.guru/v2/providers.json");
  return res.json();
});

const providersSlice = createSlice({
  name: "providers",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProviders.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProviders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProviders.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default providersSlice.reducer;

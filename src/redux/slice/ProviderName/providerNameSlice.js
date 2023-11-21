import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProviderName = createAsyncThunk(
  "fetchProviderName",
  async (pvoviderName) => {
    const res = await fetch(`https://api.apis.guru/v2/${pvoviderName}.json`);
    return res.json();
  }
);

const providerNameSlice = createSlice({
  name: "providerName",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProviderName.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProviderName.fulfilled, (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    });
    builder.addCase(fetchProviderName.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default providerNameSlice.reducer;

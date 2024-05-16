import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, registr } from "./operations";

// YK9968@gmail.com
// 1YK9968@gmail.com

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(registr.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(registr.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(registr.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(logIn.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.loading = false;
        state.error = false;
      })
      .addCase(logOut.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.loading = true;
        state.isRefreshing = true;
        state.error = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export const authReducer = authSlice.reducer;

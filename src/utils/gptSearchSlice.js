import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt",
  initialState: {
    showGptSearch: false,
    searchedMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    updateSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
  },
});
export const { toggleGptSearchView, updateSearchedMovies } = gptSlice.actions;
export default gptSlice.reducer;

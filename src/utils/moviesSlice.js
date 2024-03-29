import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trendingMovies: null,
    topRatedTVSeries: null,
    trailerVideo: null,
    userSelectedMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTopRatedTVSeries: (state, action) => {
      state.topRatedTVSeries = action.payload;
    },
    setUserSelectedMovie: (state, action) => {
      state.userSelectedMovie = action.payload;
    }
  },
});
export default moviesSlice.reducer;
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTrendingMovies,
  addTopRatedTVSeries,
  setUserSelectedMovie,
} = moviesSlice.actions;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movies: [],
    loading: false,
    error: null
}

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
    const response = await axios(`https://movie-project-pvjd.onrender.com/api/movies`);    
    return response.data;
});

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            state.loading = true;
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.loading = false;
            state.movies = action.payload.data;
            state.error = ""
        },
        [fetchMovies.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message
        }
    }
});

export default moviesSlice.reducer;
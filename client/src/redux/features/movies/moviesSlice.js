import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movies: [],
    loading: false,
    error: null,
    message: ""
}

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
    const response = await axios(`/movies`);    
    return response.data;
});

export const postMovies = createAsyncThunk("postMovies", async (obj) => {
    try {
        const response = await axios.post("/movies", obj);        
        return response.data;
    } catch (error) {
        return { message: error.message }
    }
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
    },
    extraReducers: {
        [postMovies.pending]: (state) => {
            state.loading = true;
        },
        [postMovies.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload.data.message;
            state.error = ""
        },
        [postMovies.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
});

export default moviesSlice.reducer;
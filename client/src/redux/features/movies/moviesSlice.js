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
    extraReducers: builder => {
        builder.addCase(fetchMovies.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload.data;
        });
        builder.addCase(fetchMovies. rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(postMovies.pending, state => {
            state.loading = false;
        });
        builder.addCase(postMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.data.message;
        });
        builder.addCase(postMovies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }    
});

export const message = (state) => state.message;

export default moviesSlice.reducer;
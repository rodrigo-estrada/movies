import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Request from "../../services/request";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        topMovies: [],
        recommendedMovies: [],
        filterMovies: []
    },
    reducers: {
        clearTopMovies: (state) => {
            state.topMovies = []
        },
        clearFilterResults: (state) => {
            state.filterMovies = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTopMovies.fulfilled, (state, action) => {
                state.topMovies = action.payload
            })
            .addCase(getRecomendedMovies.fulfilled, (state, action) => {
                state.recommendedMovies = action.payload
            })
            .addCase(getFilterMovies.fulfilled, (state, action) => {
                state.filterMovies = action.payload
            })
    }
})

export const getTopMovies = createAsyncThunk(
    'getTopMovies',
    async () => {
        const response = await Request.getEncoded('movie/top_rated')
        if (response) {
            return response ?? []
        } else {
            throw 'Error fetch'
        }
    }
)

export const getRecomendedMovies = createAsyncThunk(
    'getRecomendedMovies',
    async () => {
        const response = await Request.getEncoded('movie/popular')
        if (response) {
            return response ?? []
        } else {
            throw 'Error fetch'
        }
    }
)

export const getFilterMovies = createAsyncThunk(
    'getFilterMovies',
    async (obj={}) => {
        const response = await Request.getEncoded('search/movie',obj)
        if (response) {
            return response ?? []
        } else {
            throw 'Error fetch'
        }
    }
)
export const { clearTopMovies, clearFilterResults } = moviesSlice.actions
export default moviesSlice.reducer
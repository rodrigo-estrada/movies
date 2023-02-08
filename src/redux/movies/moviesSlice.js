import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Request from "../../services/request";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        topMovies:[],
        recommendedMovies:[],
    },
    reducers:{
        clearTopMovies:(state) =>{
            state.topMovies = []
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getTopMovies.fulfilled,(state,action) => {
            state.topMovies = action.payload
        })
    }
})

export const getTopMovies =createAsyncThunk(
    'getTopMovies',
    async () => {
        const response = await Request.getEncoded('movie/top_rated')
        if(response){
            return response ?? []
        }else{
            throw 'Error fetch'
        }
    }
)

export const {clearTopMovies } =moviesSlice.actions
export default moviesSlice.reducer
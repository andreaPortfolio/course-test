import {createSlice} from '@reduxjs/toolkit';
import {fetchArticles, ArticlesState} from '../index';

const initialState: ArticlesState = {data: [], loading: false, error: null}


export const articlesSlice = createSlice({
    initialState,
    name: 'articles',
    reducers: {},
    extraReducers: (builder)=>{builder
        .addCase(fetchArticles.fulfilled, (state, {payload})=>{
            state.data = payload;
            state.loading = false;
        
        })
        .addCase(fetchArticles.pending, (state, {payload})=>{
            state.loading = true;
        
        })
        .addCase(fetchArticles.rejected, (state, {payload})=>{
            state.loading = false;
            state.error = payload;
        
        })
    }
})
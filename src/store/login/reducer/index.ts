import { createSlice } from '@reduxjs/toolkit';
import {setLogin} from '../';


export const loginSlice = createSlice({
    name: 'login',
    initialState: {access: false},
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(setLogin, (state, {payload})=>{state.access = payload;})

    }
})
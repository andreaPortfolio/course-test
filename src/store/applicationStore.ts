import { configureStore } from "@reduxjs/toolkit";

import {loginSlice} from './login';
import {articlesSlice} from './articles';
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        articles: articlesSlice.reducer,
    
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

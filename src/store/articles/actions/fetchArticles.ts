import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchArticles = createAsyncThunk('fetch/articles', async () => {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
        const data = await response.json();

        if (response.ok) {
            return data;
        }

        return 'error';


    } catch (error) {
        console.log(error)

    }

})
import { createSlice } from '@reduxjs/toolkit';


export const allRecipesSlice = createSlice({
    name: 'allRecipes',
    initialState: [],
    reducers: {
        loadData: (state, action) => {
            return action.payload
        },
    }
})

export const allRecipesSelector = state => state.allRecipes;

export const { loadData } = allRecipesSlice.actions;

export const allRecipesReducer = allRecipesSlice.reducer;
import { createSlice} from "@reduxjs/toolkit";

const favoriteRecipesSlice = createSlice({
    name: 'favoriteRecipes',
    initialState: [],
    reducers:{
        addFavorite: (state, action) => {
            return [...state, action.payload]
        },
        removeFavorite: (state, action) => {
            return state.filter(recipe => recipe.id !== action.payload.id)
        }
    }
})

export const { addFavorite, removeFavorite } = favoriteRecipesSlice.actions;

export const favoriteRecipesSelector = state => state.favoriteRecipes;

export const favoriteRecipesSliceReducer = favoriteRecipesSlice.reducer;
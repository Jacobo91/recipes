import { configureStore } from "@reduxjs/toolkit";
import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice";
import { favoriteRecipesSliceReducer } from "../features/favoriteRecipes/favoriteRecipesSlice";

export const store = configureStore({
    reducer: {
        allRecipes: allRecipesReducer,
        favoriteRecipes: favoriteRecipesSliceReducer,
    }
})
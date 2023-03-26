
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from './allRecipesSlice';
import { foodData } from '../../data';
import { useEffect } from 'react';
import  RecipeItem  from '../../components/recipeItem/RecipeItem';
import Button from '../../components/button/Button';
import { addFavorite } from '../favoriteRecipes/favoriteRecipesSlice';

export default function AllRecipes(){

    const recipes = useSelector(state => state.allRecipes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadData(foodData))
    }, []);

    function handleAddFavorite(recipe){
        dispatch(addFavorite(recipe))
    }

    return(
        <section className='gallery' >
            {
                recipes.map(recipe => (
                    <RecipeItem key={recipe.id} recipe={recipe}>
                        <Button
                            onClickHandler={() => handleAddFavorite(recipe)}
                        >
                            Add favorite
                        </Button>
                    </RecipeItem>
                ))
            }
        </section>
    )
}
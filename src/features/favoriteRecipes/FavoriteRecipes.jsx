
import { useSelector } from "react-redux"; 
import Button from "../../components/button/Button";
import RecipeItem from "../../components/recipeItem/RecipeItem";
import { useDispatch } from "react-redux";
import { removeFavorite } from "./favoriteRecipesSlice";

export default function FavoriteRecipes(){

    const favoriteRecipes = useSelector(state => state.favoriteRecipes);
    const dispatch = useDispatch();

    function handleRemoveFavorite(favorite){
        dispatch(removeFavorite(favorite))
    }

    return(
        <section className="gallery" >
            {
                favoriteRecipes.map(favorite => (
                    <RecipeItem key={favorite.id} recipe={favorite}>
                        <Button
                            onClickHandler={() => handleRemoveFavorite(favorite)}
                        >
                            Remove favorite
                        </Button>
                    </RecipeItem>
                ))
            }
        </section>
    )
}
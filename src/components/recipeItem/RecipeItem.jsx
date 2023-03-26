import './recipeItem.css'


export default function RecipeItem({ recipe, children }){
    return(
        <article className="food-card" >
            <img
                src={recipe.img}
                alt={recipe.title}
                className="food-card--img"
            />
            <article className="food-card--text" >
                <span className="fod-card--title" >
                    {recipe.title}
                </span>
                <span className="food-card--price" >
                    {`$${recipe.price}`}
                </span>
            </article>
            {children}
        </article>
    )
}
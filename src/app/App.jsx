import './App.css';
import AllRecipes from '../features/allRecipes/AllRecipes';
import FavoriteRecipes from '../features/favoriteRecipes/FavoriteRecipes';


function App() {

  return (
    <div className="App">
      <h1>Recipes</h1>
      <h2>Favorites</h2>
        <FavoriteRecipes/>
      <h2>All</h2>
        <AllRecipes />
    </div>
  );
}

export default App;

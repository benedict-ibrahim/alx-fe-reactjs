import { Link } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'
import FavoriteButton from './FavoriteButton'

const FavoritesList = () => {
  const favorites = useRecipeStore(state => 
    state.favorites.map(id => 
      state.recipes.find(recipe => recipe.id === id)
    ).filter(Boolean) // Filter out undefined if recipes are deleted
  )

  return (
    <div className="favorites-list">
      <h2>My Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>You haven't favorited any recipes yet.</p>
      ) : (
        <div className="recipes-grid">
          {favorites.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="card-header">
                <h3>
                  <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                </h3>
                <FavoriteButton recipeId={recipe.id} />
              </div>
              <p>{recipe.description.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritesList
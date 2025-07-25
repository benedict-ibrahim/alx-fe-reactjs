import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const RecipeList = () => {
  const getFilteredRecipes = useRecipeStore(state => state.getFilteredRecipes)
  const filteredRecipes = useRecipeStore(state => state.getFilteredRecipes())

  useEffect(() => {
    // This ensures the filtered recipes are recomputed when dependencies change
  }, [getFilteredRecipes])

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found matching your criteria.</p>
      ) : (
        <div className="recipes-grid">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description.substring(0, 100)}...</p>
              <div className="recipe-meta">
                {recipe.prepTime && <span>⏱️ {recipe.prepTime} min</span>}
                {recipe.rating && <span>⭐ {recipe.rating}/5</span>}
              </div>
              <div className="recipe-actions">
                <Link to={`/edit/${recipe.id}`} className="edit-link">
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default RecipeList
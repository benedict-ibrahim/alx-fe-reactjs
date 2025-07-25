import { Link, useParams } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipeId = parseInt(id)
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  )

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <div className="recipe-actions">
        <Link to={`/edit/${recipe.id}`} className="edit-button">
          Edit Recipe
        </Link>
        <Link to="/" className="back-button">
          Back to Recipes
        </Link>
      </div>
    </div>
  )
}

export default RecipeDetails
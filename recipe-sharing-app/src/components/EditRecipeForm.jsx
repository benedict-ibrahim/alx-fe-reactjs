import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const EditRecipeForm = () => {
  const { id } = useParams()
  const recipeId = parseInt(id)
  const navigate = useNavigate()
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  )
  const updateRecipe = useRecipeStore((state) => state.updateRecipe)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title)
      setDescription(recipe.description)
    }
  }, [recipe])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return

    updateRecipe(recipeId, { title, description })
    navigate(`/recipe/${recipeId}`)
  }

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <h2>Edit Recipe</h2>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter recipe title"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter recipe description"
          required
        />
      </div>
      <button type="submit">Update Recipe</button>
      <button
        type="button"
        onClick={() => navigate(`/recipe/${recipeId}`)}
        className="cancel-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditRecipeForm
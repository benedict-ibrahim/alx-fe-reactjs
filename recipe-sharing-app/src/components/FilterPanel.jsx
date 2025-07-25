import { useState } from 'react'
import useRecipeStore from '../store/recipeStore'

const FilterPanel = () => {
  const [ingredientInput, setIngredientInput] = useState('')
  const { filters, setFilters } = useRecipeStore()

  const handleAddIngredient = () => {
    if (ingredientInput.trim() && !filters.ingredients.includes(ingredientInput)) {
      setFilters({
        ingredients: [...filters.ingredients, ingredientInput.trim()]
      })
      setIngredientInput('')
    }
  }

  const removeIngredient = (ingredient) => {
    setFilters({
      ingredients: filters.ingredients.filter(i => i !== ingredient)
    })
  }

  return (
    <div className="filter-panel">
      <h3>Filters</h3>
      
      <div className="filter-section">
        <h4>Ingredients</h4>
        <div className="ingredient-filter">
          <input
            type="text"
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
            placeholder="Add ingredient filter"
          />
          <button type="button" onClick={handleAddIngredient}>Add</button>
        </div>
        <div className="ingredient-tags">
          {filters.ingredients.map(ingredient => (
            <span key={ingredient} className="ingredient-tag">
              {ingredient}
              <button onClick={() => removeIngredient(ingredient)}>×</button>
            </span>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Preparation Time</h4>
        <label>
          Max time (minutes):
          <input
            type="number"
            value={filters.maxTime || ''}
            onChange={(e) => setFilters({ maxTime: e.target.value ? Number(e.target.value) : null })}
            min="1"
          />
        </label>
      </div>

      <div className="filter-section">
        <h4>Rating</h4>
        <label>
          Minimum rating:
          <select
            value={filters.minRating}
            onChange={(e) => setFilters({ minRating: Number(e.target.value) })}
          >
            <option value="0">Any</option>
            <option value="1">★+</option>
            <option value="2">★★+</option>
            <option value="3">★★★+</option>
            <option value="4">★★★★+</option>
            <option value="5">★★★★★</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default FilterPanel
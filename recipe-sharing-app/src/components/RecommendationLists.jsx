import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'
import FavoriteButton from './FavoriteButton'

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations)
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations)

  useEffect(() => {
    generateRecommendations()
  }, [generateRecommendations])

  return (
    <div className="recommendations-list">
      <h2>Recommended For You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Favorite some recipes to get personalized suggestions!</p>
      ) : (
        <div className="recipes-grid">
          {recommendations.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="card-header">
                <h3>
                  <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                </h3>
                <FavoriteButton recipeId={recipe.id} />
              </div>
              <p>{recipe.description.substring(0, 100)}...</p>
              {recipe.categories?.length > 0 && (
                <div className="categories">
                  {recipe.categories.map(cat => (
                    <span key={cat} className="category-tag">{cat}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default RecommendationsList
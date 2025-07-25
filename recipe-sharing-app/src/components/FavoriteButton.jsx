import useRecipeStore from '../store/recipeStore'

const FavoriteButton = ({ recipeId }) => {
  const isFavorite = useRecipeStore(state => state.isFavorite(recipeId))
  const toggleFavorite = useRecipeStore(state => state.toggleFavorite)

  return (
    <button 
      onClick={() => toggleFavorite(recipeId)}
      className={`favorite-button ${isFavorite ? 'active' : ''}`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  )
}

export default FavoriteButton
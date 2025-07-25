import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  
  // Existing recipe actions
  addRecipe: (newRecipe) => 
    set((state) => ({ 
      recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
    })),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  setRecipes: (recipes) => set({ recipes }),
  
  // Favorites functionality
  addFavorite: (recipeId) => 
    set((state) => ({
      favorites: state.favorites.includes(recipeId) 
        ? state.favorites 
        : [...state.favorites, recipeId]
    })),
  removeFavorite: (recipeId) => 
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId)
    })),
  toggleFavorite: (recipeId) => 
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites.filter((id) => id !== recipeId)
        : [...state.favorites, recipeId]
    })),
  isFavorite: (recipeId) => get().favorites.includes(recipeId),
  
  // Recommendations functionality
  generateRecommendations: () => {
    const { recipes, favorites } = get()
    if (favorites.length === 0) {
      return set({ recommendations: [] })
    }
    
    // Simple recommendation algorithm:
    // 1. Find categories from favorite recipes
    const favoriteCategories = recipes
      .filter(recipe => favorites.includes(recipe.id))
      .flatMap(recipe => recipe.categories || [])
    
    // 2. Recommend recipes in the same categories
    const recommended = recipes
      .filter(recipe => {
        // Don't recommend already favorited recipes
        if (favorites.includes(recipe.id)) return false
        
        // Check for category matches
        return recipe.categories?.some(cat => 
          favoriteCategories.includes(cat))
      })
      .sort(() => 0.5 - Math.random()) // Shuffle
      .slice(0, 5) // Get top 5
    
    set({ recommendations: recommended })
  }
}))
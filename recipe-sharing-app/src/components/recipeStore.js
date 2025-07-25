import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filters: {
    ingredients: [],
    maxTime: null,
    minRating: 0
  },
  
  // Actions
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
  
  // Search functionality
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  // Filter functionality
  setFilters: (newFilters) => set({ filters: { ...get().filters, ...newFilters } }),
  
  // Computed filtered recipes
  getFilteredRecipes: () => {
    const { recipes, searchTerm, filters } = get()
    return recipes.filter(recipe => {
      // Search term matching
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      // Ingredient filter
      const matchesIngredients = filters.ingredients.length === 0 || 
                              filters.ingredients.some(ing => 
                                recipe.ingredients?.includes(ing))
      
      // Time filter
      const matchesTime = !filters.maxTime || 
                         (recipe.prepTime && recipe.prepTime <= filters.maxTime)
      
      // Rating filter
      const matchesRating = recipe.rating >= filters.minRating
      
      return matchesSearch && matchesIngredients && matchesTime && matchesRating
    })
  }
}))

export default useRecipeStore
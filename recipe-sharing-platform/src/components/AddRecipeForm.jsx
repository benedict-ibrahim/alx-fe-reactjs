import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: '',
    ingredients: '',
    instructions: '',
    cookingTime: '',
    servings: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Recipe title is required';
    if (!formData.summary.trim()) newErrors.summary = 'Summary is required';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!formData.instructions.trim()) newErrors.instructions = 'Instructions are required';
    if (!formData.cookingTime.trim()) newErrors.cookingTime = 'Cooking time is required';
    if (!formData.servings.trim()) newErrors.servings = 'Servings is required';
    
    // Additional validation for ingredients format
    if (formData.ingredients.trim() && formData.ingredients.split('\n').filter(i => i.trim()).length < 2) {
      newErrors.ingredients = 'Please enter at least 2 ingredients';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process form data
      const newRecipe = {
        ...formData,
        id: Date.now(), // Temporary ID
        ingredients: formData.ingredients.split('\n').filter(i => i.trim()),
        instructions: formData.instructions.split('\n').filter(i => i.trim())
      };
      
      // In a real app, you would send this to your backend API
      console.log('New recipe:', newRecipe);
      
      // For now, just navigate back to home
      navigate('/');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8">Add New Recipe</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Recipe Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            placeholder="e.g. Spaghetti Carbonara"
          />
          {errors.title && <p className="mt-1 text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="summary" className="block text-gray-700 font-medium mb-2">
            Short Summary *
          </label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            rows="2"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.summary ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            placeholder="Brief description of your recipe"
          />
          {errors.summary && <p className="mt-1 text-red-500 text-sm">{errors.summary}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="https://example.com/recipe-image.jpg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="cookingTime" className="block text-gray-700 font-medium mb-2">
              Cooking Time *
            </label>
            <input
              type="text"
              id="cookingTime"
              name="cookingTime"
              value={formData.cookingTime}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.cookingTime ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
              placeholder="e.g. 30 mins"
            />
            {errors.cookingTime && <p className="mt-1 text-red-500 text-sm">{errors.cookingTime}</p>}
          </div>

          <div>
            <label htmlFor="servings" className="block text-gray-700 font-medium mb-2">
              Servings *
            </label>
            <input
              type="number"
              id="servings"
              name="servings"
              value={formData.servings}
              onChange={handleChange}
              min="1"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.servings ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
              placeholder="e.g. 4"
            />
            {errors.servings && <p className="mt-1 text-red-500 text-sm">{errors.servings}</p>}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">
            Ingredients * (one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.ingredients ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            placeholder={`1 cup flour\n2 eggs\n1 tsp salt`}
          />
          {errors.ingredients && <p className="mt-1 text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="instructions" className="block text-gray-700 font-medium mb-2">
            Instructions * (one step per line)
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.instructions ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            placeholder={`Preheat oven to 350°F\nMix dry ingredients\nAdd wet ingredients`}
          />
          {errors.instructions && <p className="mt-1 text-red-500 text-sm">{errors.instructions}</p>}
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
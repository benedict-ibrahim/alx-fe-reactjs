import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
    ingredients: '',
    steps: '', // Explicit steps field
    cookingTime: '',
    servings: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    // Proper target.value destructuring
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Recipe title is required';
    if (!formData.summary.trim()) newErrors.summary = 'Summary is required';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!formData.steps.trim()) newErrors.steps = 'Cooking steps are required'; // Steps validation
    if (!formData.cookingTime.trim()) newErrors.cookingTime = 'Cooking time is required';
    if (!formData.servings.trim()) newErrors.servings = 'Servings is required';
    
    if (formData.ingredients.trim() && 
        formData.ingredients.split('\n').filter(i => i.trim()).length < 2) {
      newErrors.ingredients = 'Please enter at least 2 ingredients';
    }

    if (formData.steps.trim() && 
        formData.steps.split('\n').filter(s => s.trim()).length < 2) {
      newErrors.steps = 'Please enter at least 2 cooking steps';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const newRecipe = {
        ...formData,
        id: Date.now(),
        ingredients: formData.ingredients.split('\n').map(i => i.trim()).filter(i => i),
        steps: formData.steps.split('\n').map(s => s.trim()).filter(s => s), // Explicit steps processing
        servings: parseInt(formData.servings)
      };
      
      console.log('Submitted recipe:', newRecipe);
      navigate('/', { state: { recipeAdded: true } });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8">Share Your Recipe</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
        {/* Title */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange} // Using target.value via handleChange
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
            placeholder="e.g. Grandma's Chocolate Chip Cookies"
          />
          {errors.title && <p className="mt-1 text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Summary */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Short Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            rows="2"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.summary ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
            placeholder="What makes this recipe special?"
          />
          {errors.summary && <p className="mt-1 text-red-500 text-sm">{errors.summary}</p>}
        </div>

        {/* Image URL */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="https://example.com/recipe-photo.jpg"
          />
        </div>

        {/* Cooking Time & Servings */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Cooking Time <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="cookingTime"
              value={formData.cookingTime}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.cookingTime ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
              placeholder="e.g. 45 minutes"
            />
            {errors.cookingTime && <p className="mt-1 text-red-500 text-sm">{errors.cookingTime}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Servings <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="servings"
              value={formData.servings}
              onChange={handleChange}
              min="1"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.servings ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
              placeholder="e.g. 4"
            />
            {errors.servings && <p className="mt-1 text-red-500 text-sm">{errors.servings}</p>}
          </div>
        </div>

        {/* Ingredients */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients <span className="text-red-500">*</span>
          </label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.ingredients ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
            placeholder={`2 cups all-purpose flour\n1 tsp baking soda\n1 cup chocolate chips`}
          />
          {errors.ingredients && <p className="mt-1 text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-2">
            Cooking Steps <span className="text-red-500">*</span>
          </label>
          <textarea
            name="steps" // Explicit steps field
            value={formData.steps}
            onChange={handleChange}
            rows="6"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.steps ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
            placeholder={`1. Preheat oven to 375°F (190°C)\n2. Mix dry ingredients in a bowl\n3. Add wet ingredients and stir until combined`}
          />
          {errors.steps && <p className="mt-1 text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`px-6 py-3 rounded-lg font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isSubmitting 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-200'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Share Recipe'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
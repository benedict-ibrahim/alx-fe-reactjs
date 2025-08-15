import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        const foundRecipe = data.find(r => r.id === parseInt(id));
        
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          setError('Recipe not found');
        }
      } catch (err) {
        setError('Failed to fetch recipe');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!recipe) return <div className="text-center py-8">Recipe not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link 
        to="/" 
        className="inline-flex items-center mb-6 text-blue-500 hover:text-blue-700"
      >
        ← Back to recipes
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-64 sm:h-80 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-gray-100 px-3 py-1 rounded-full">
              ⏱️ {recipe.cookingTime}
            </div>
            <div className="bg-gray-100 px-3 py-1 rounded-full">
              🍽️ Serves {recipe.servings}
            </div>
          </div>

          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-blue-100 text-blue-600 rounded-full mr-2 mt-0.5 flex items-center justify-center text-xs">✓</span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeForm from '../components/RecipeForm';

const RecipeEditPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe details from the server based on the ID
  }, [id]);

  const handleUpdate = (recipeData) => {
    // Send the updated recipe data to the server
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Recipe</h1>
      <RecipeForm handleSubmit={handleUpdate} recipe={recipe} />
    </div>
  );
};

export default RecipeEditPage;

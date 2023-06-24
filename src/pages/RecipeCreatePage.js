import React from 'react';
import RecipeForm from '../components/RecipeForm';

const RecipeCreatePage = () => {
  const handleCreate = (recipeData) => {
    // Send the recipe data to the server to create a new recipe
  };

  return (
    <div>
      <h1>Create Recipe</h1>
      <RecipeForm handleSubmit={handleCreate} />
    </div>
  );
};

export default RecipeCreatePage;

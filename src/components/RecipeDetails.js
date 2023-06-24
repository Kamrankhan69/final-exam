import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  );
};

export default RecipeDetails;

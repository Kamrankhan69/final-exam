import React from 'react';

const RecipeItem = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  );
};

export default RecipeItem;

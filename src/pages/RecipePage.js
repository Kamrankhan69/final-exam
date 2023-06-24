import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetails from '../components/RecipeDetails';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`http://localhost:3001/recipes/${id}`);
      const data = await response.json();
      setRecipe(data);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Recipe Details</h1>
      <RecipeDetails recipe={recipe} />
    </div>
  );
};

export default RecipePage;

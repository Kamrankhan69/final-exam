import React, { useEffect, useState } from 'react';
import RecipeList from '../components/RecipeList';
import RecipeSearch from '../components/RecipeSearch';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      
    };

    fetchRecipes();
  }, []);

  const handleSearch = (searchQuery) => {
    
  };

  return (
    <div>
      <h1>Recipe Management Application</h1>
      <RecipeSearch handleSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default HomePage;

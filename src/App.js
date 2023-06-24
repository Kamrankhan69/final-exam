import './App.css';
import RecipeDetails from './components/RecipeDetails';
import RecipeItem from './components/RecipeItem';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import RecipeSearch from './components/RecipeSearch';


function App() {
  return (
    <div className="App">
        <RecipeDetails />
        <RecipeItem />
        <RecipeList />
        <RecipeForm />
        <RecipeSearch />
    </div>
  );
}


export default App;




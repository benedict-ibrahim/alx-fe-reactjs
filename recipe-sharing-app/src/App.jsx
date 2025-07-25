import { Routes, Route } from 'react-router-dom'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import SearchBar from './components/SearchBar'
import FilterPanel from './components/FilterPanel'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Recipe Sharing App</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <div className="search-container">
                <SearchBar />
                <FilterPanel />
              </div>
              <AddRecipeForm />
              <RecommendationsList />
              <RecipeList />
            </>
          } />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </main>
      <nav className="main-nav">
        <a href="/">Home</a>
        <a href="/favorites">My Favorites</a>
      </nav>
    </div>
  )
}

export default App
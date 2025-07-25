import { useState } from 'react'
import useRecipeStore from '../store/recipeStore'

const SearchBar = () => {
  const [localTerm, setLocalTerm] = useState('')
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm)

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchTerm(localTerm)
  }

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={localTerm}
        onChange={(e) => setLocalTerm(e.target.value)}
        placeholder="Search recipes..."
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
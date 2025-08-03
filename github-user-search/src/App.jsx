import { useState } from 'react'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search GitHub users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </div>
    </div>
  )
}

export default App
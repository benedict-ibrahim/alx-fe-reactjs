import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our App</h1>
      <p>This is the home page with advanced routing features.</p>
      
      <div className="featured-posts">
        <h2>Featured Posts</h2>
        <div className="post-links">
          <Link to="/posts/1">Post 1</Link>
          <Link to="/posts/2">Post 2</Link>
          <Link to="/posts/3">Post 3</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
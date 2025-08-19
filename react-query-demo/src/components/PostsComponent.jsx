import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { 
    data: posts, 
    isLoading, 
    isError, 
    error,
    refetch,
    isFetching,
    isPreviousData
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 10 * 1000, // 10 seconds until data becomes stale
    cacheTime: 15 * 60 * 1000, // 15 minutes cache retention
    refetchOnWindowFocus: true, // Refetch when window regains focus
    keepPreviousData: true, // Keep showing old data while fetching new
    retry: 2, // Retry failed requests twice
    retryDelay: attempt => Math.min(attempt * 1000, 3000) // Exponential backoff
  });

  if (isLoading && !isPreviousData) {
    return <div>Loading posts for the first time...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <div className="controls">
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? 'Refreshing...' : 'Refresh Posts'}
        </button>
        <div className="query-status">
          {isFetching && <span>Background updating...</span>}
          {isPreviousData && <span>Showing cached data while refreshing...</span>}
        </div>
      </div>
      
      <div className="posts-list">
        {posts?.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>Post ID: {post.id}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsComponent;
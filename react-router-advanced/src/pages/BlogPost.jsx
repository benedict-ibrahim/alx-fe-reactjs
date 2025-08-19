import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const fetchPost = async (postId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )
  if (!response.ok) throw new Error('Post not found')
  return response.json()
}

const BlogPost = () => {
  const { postId } = useParams()
  const { data: post, isLoading, isError, error } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetchPost(postId)
  })

  if (isLoading) return <div>Loading post...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <small>Post ID: {postId}</small>
    </div>
  )
}

export default BlogPost
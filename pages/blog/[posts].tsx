import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { posts } = router.query

  return <p>Post: {posts}</p>
}

export default Post

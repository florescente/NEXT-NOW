import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Post } from '../../Interfaces/posts'

function Posto(data: Post) {
  const router = useRouter()
  const { posts } = router.query

  return (
    <ul>
      <li>{posts}</li>
      <li>{data.id}</li>
      <li>{data.userId}</li>
      <li>{data.title}</li>
      <li>{data.body}</li>
    </ul>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data: Array<Post> = await res.json()
  const path = data.map((bird) => ({
    params: { posts: bird.id.toString() },
  }))
  return {
    paths: path,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pid = context.params?.posts
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`)
  const data = await res.json()
  return {
    props: data,
  }
}

export default Posto

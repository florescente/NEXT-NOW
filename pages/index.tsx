import Head from 'next/head'
import Image from 'next/image'
import { Imagine } from './typings'

const Home = (posts: Imagine) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next Now</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-4/5 h-screen mt-10">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-3 w-full m-0 p-0">
          {posts.results.map((dog) => (
            <figure
              key={dog.id + 'key'}
              className="flex break-inside-avoid mb-4 p-0 border-2 border-white"
            >
              <Image
                src={dog.urls.regular}
                height={dog.height / 30}
                width="100%"
                id={dog.id}
                key={dog.id}
                alt="Image"
                objectFit="fill"
                /* placeholder="blur"
                blurDataURL={dog.blur_hash} */
                className="w-full	rounded"
              />
            </figure>
          ))}
        </div>
      </main>
    </div>
  )
}
//flex break-inside-avoid m-0
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const Access_Key = process.env.NEXT_PUBLIC_API_KEY_UNSPLASH
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=1&per_page=30&query=office&client_id=${Access_Key}`
  )
  const posts = await res.json()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: posts, // will be passed to the page component as props
  }
}

export default Home

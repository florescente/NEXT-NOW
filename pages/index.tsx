import Head from 'next/head'
import Image from 'next/image'
import { Imagine } from './typings'
import { decode } from 'blurhash'
import { createCanvas } from 'canvas'

const Home = (posts: Imagine) => {
  function blurDataURLi(blurhashi: string, prorp: number) {
    const height = Math.round((195 * Math.round(prorp * 100)) / 100)
    const width = Math.round(195)
    const pixels = decode(blurhashi, width, height)
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
    const imageData = ctx.createImageData(width, height)
    imageData.data.set(pixels)
    ctx.putImageData(imageData, 0, 0)
    const blurDataUrl = canvas.toDataURL()
    return blurDataUrl
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next Now</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full md:w-4/5 h-screen mt-10">
        <h1 className="flex text-center justify-center text-2xl mb-4">
          Masonry Image gallery
        </h1>
        <div className="columns-2 sm:columns-3 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-6	md:gap-3 w-full m-0 px-0 py-4">
          {posts.results.map((dog) => (
            <figure
              key={dog.id + 'key'}
              className="flex break-inside-avoid mb-4 p-0 border-none"
            >
              <Image
                src={dog.urls.thumb}
                height={(dog.height / dog.width) * 195}
                width="100%"
                id={dog.id}
                key={dog.id}
                alt="Image"
                objectFit="fill"
                placeholder="blur"
                blurDataURL={blurDataURLi(
                  dog.blur_hash,
                  dog.height / dog.width
                )}
                className="w-full	rounded-lg"
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
    `https://api.unsplash.com/search/photos?page=1&per_page=30&query=rainbow&client_id=${Access_Key}`
  )
  const posts = await res.json()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: posts, // will be passed to the page component as props
  }
}

export default Home

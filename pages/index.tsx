import Head from 'next/head'
import Image from 'next/image'
import { Imagine, RootObject } from '../Interfaces/typings'
import { blurDataURLi } from '../utils/blurhash'
import { ReactElement } from 'react'
import Layout from '../components/layout'

const Home = (posts: Imagine) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next Now</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="flex flex-col items-center w-full md:w-4/5 h-screen mt-10">
        <h1 className="flex text-center justify-center text-2xl mb-4 font-bebas">
          Masonry Image gallery
        </h1>
        <div className="columns-2 sm:columns-3 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-3 w-fit m-0 px-0 py-4">
          {posts.results!.map((dog) => (
            <figure
              key={dog.id + 'key'}
              className="flex justify-center break-inside-avoid mb-4 p-0 border-none relative"
            >
              <Image
                src={dog.urls.thumb}
                height={(dog.height / dog.width) * 210}
                width={210}
                id={dog.id}
                key={dog.id}
                alt="Image"
                objectFit="fill"
                placeholder="blur"
                blurDataURL={dog.real_hash}
                className="rounded-lg transition ease-in-out delay-150 hover:opacity-75 duration-300 cursor-zoom-in"
              />
            </figure>
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const Access_Key = process.env.NEXT_PUBLIC_API_KEY_UNSPLASH
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=1&per_page=30&query=dog&client_id=${Access_Key}`
  )
  const posts: Imagine = await res.json()
  const potato: RootObject[] = []
  posts.results!.map((cat) => {
    potato.push({
      id: cat.id,
      urls: { thumb: cat.urls.thumb, regular: cat.urls.regular },
      height: cat.height,
      width: cat.width,
      real_hash: blurDataURLi(cat.blur_hash!, cat.height / cat.width),
    })
  })
  delete posts.results
  posts.results = potato
  return {
    props: posts,
  }
}

Home.getLayout = function getLayout(home: ReactElement) {
  return <Layout>{home}</Layout>
}

export default Home

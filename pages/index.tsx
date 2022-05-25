import Head from 'next/head'
import Image from 'next/image'
import React, { ReactElement, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import _ from 'lodash'
import { Imagine, RootObject } from '../Interfaces/typings'
import blurDataURLi from '../utils/blurhash'
import Layout from '../components/layout'

function Home(posts: Imagine) {
  const [isModal, setIsModal] = useState<boolean>(false)
  const refLoop = useRef(_.fill(Array(posts.results?.length), false))
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Next Now</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <main className="flex flex-col items-center w-full md:w-4/5 h-screen mt-10">
          <h1 className="flex text-center justify-center text-2xl mb-4 font-bebas">
            Masonry Image gallery
          </h1>
          <div className="columns-2 sm:columns-3 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-3 w-fit m-0 px-0 py-4">
            {posts.results!.map((dog, index) => (
              <figure
                key={`${dog.id}-figure`}
                className="flex justify-center break-inside-avoid mb-4 p-0 border-none relative rounded-lg"
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
                  className="rounded-lg"
                />
                <div
                  className="openmodal rounded-lg cursor-zoom-in absolute overimage w-full h-full opacity-0 transition ease-in-out delay-150 hover:opacity-75"
                  aria-hidden="true"
                  onKeyDown={() => {
                    refLoop.current[index] = true
                    setIsModal(!isModal)
                  }}
                  onClick={() => {
                    refLoop.current[index] = true
                    setIsModal(!isModal)
                  }}
                />
              </figure>
            ))}
          </div>
        </main>
      </div>
      <div
        className={
          isModal
            ? 'fixed modal h-screen w-full top-0 left-0 text-cyan-100 flex flex-col'
            : 'fixed modal h-screen w-full top-0 left-0 text-cyan-100 hidden flex-col'
        }
      >
        {posts.results!.map((horse, id) => (
          <React.Fragment key={`${horse.id}-item`}>
            <div
              key={`${horse.id}-wrapper-top--id`}
              className={`${
                refLoop.current[id] ? 'flex' : 'hidden'
              } justify-end basis-1/12`}
            >
              <AiOutlineClose
                className="closemodal flex self-center text-4xl mr-2.5"
                key={`${horse.id}-icon-id`}
                onClick={() => {
                  refLoop.current[id] = false
                  setIsModal(!isModal)
                }}
              />
            </div>
            <div
              key={`${horse.id}-wrapper-bot-id`}
              className={`${
                refLoop.current[id] ? 'flex' : 'hidden'
              } flex justify-center items-center basis-11/12 relative`}
            >
              <div
                key={`${horse.id}-wrapper-img-top`}
                className="absolute h-full w-full"
              >
                <Image
                  src={horse.real_hash}
                  id={`${horse.id}-blur`}
                  key={`${horse.id}-blur`}
                  alt="image big loading"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div
                key={`${horse.id}-wrapper-img-bot`}
                className="relative w-full h-full"
              >
                <Image
                  src={horse.urls.regular}
                  id={`${horse.id}-modal`}
                  key={`${horse.id}-modal`}
                  alt="image big"
                  layout="fill"
                  objectFit="contain"
                  priority={false}
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const AccessKey = process.env.NEXT_PUBLIC_API_KEY_UNSPLASH
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=1&per_page=30&query=dog&client_id=${AccessKey}`
  )
  const posts: Imagine = await res.json()
  const potato: RootObject[] = []
  posts.results!.map((cat) => {
    potato.push({
      id: cat.id,
      urls: { thumb: cat.urls.thumb, regular: cat.urls.regular },
      height: cat.height,
      width: cat.width,
      real_hash: blurDataURLi(cat.blur_hash!, cat.height / cat.width, 210),
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

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { HiUserCircle } from 'react-icons/hi'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next Now</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Página Mestra
      <main>
        <HiUserCircle />
      </main>
    </div>
  )
}

export default Home

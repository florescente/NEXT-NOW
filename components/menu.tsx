import Link from 'next/link'

function Menu() {
  return (
    <ul className="flex space-x-10 justify-end p-5 cursor-pointer">
      <li>
        <Link href="/">
          <h1>Home</h1>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <h1>Blog</h1>
        </Link>
      </li>
      <li>
        <Link href="/blog/1">
          <h1>Blog Post</h1>
        </Link>
      </li>
    </ul>
  )
}

export default Menu

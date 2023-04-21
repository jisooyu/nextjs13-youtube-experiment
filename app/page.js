import React from 'react'
import Link from "next/link"

const HomePage = () => {
  return (
    <header className="bg-indigo-500 text-white sticky">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div>
          <Link href="/" className="text-lg mr-4">
            Home
          </Link>
        </div>
        <div>
          <h1 className="text-lg font-bold text-center">Culture Exhibition</h1>
        </div>
        <div>
          <Link href="/about" className="mr-4">
            About
          </Link>
          <Link href="/users" className="mr-4">
            Users
          </Link>
          <Link href="/post" className="mr-4">
            Create
          </Link>
        </div>
      </nav>
    </header>

  )
}

export default HomePage
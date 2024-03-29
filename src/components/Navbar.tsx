'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)
  const pathname = usePathname()

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }
  const navLinks = [
    {
      name: 'EdgeStore',
      path: '/edgestore',
    },
    {
      name: 'EdgeStore-File',
      path: '/edgestore/edgeFile',
    },
    {
      name: 'Cloudinary Upload',
      path: '/cloudinary',
    },
    {
      name: 'Cloud Album Upload',
      path: '/cloud_album',
    },
    {
      name: 'Cloud Gallery',
      path: '/gallery',
    },
  ]
  return (
    <header className="bg-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" title="JB" className="flex font-bold">
              JB WEB DEVELOPER
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-900"
              onClick={toggleExpanded}
              aria-expanded={expanded}
            >
              <span aria-hidden="true">
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {expanded ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-16">
            {navLinks.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.path}
                  title={item.name}
                  className={`font-pj rounded text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-80 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 ${pathname === item.path ? 'rounded-lg bg-primary px-4 py-2.5 text-white' : ''}`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <nav className="hidden lg:flex">
            <a
              href="https://www.youtube.com/c/JBWEBDEVELOPER"
              title="Subscribe to JB WEB DEVELOPER"
              className="font-pj inline-flex items-center justify-center rounded-lg border border-transparent bg-red-500 px-6 py-2 text-base font-bold leading-7 text-white transition-all duration-200 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              role="button"
            >
              SUBSCRIBE
            </a>
          </nav>
        </div>

        <nav style={{ display: expanded ? 'block' : 'none' }}>
          <div className="px-1 py-8">
            <div className="grid gap-y-7">
              {navLinks.map((item, i) => {
                return (
                  <Link
                    key={i}
                    href={item.path}
                    title={item.name}
                    className="font-pj rounded   text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {item.name}
                  </Link>
                )
              })}

              <a
                href="https://www.youtube.com/c/JBWEBDEVELOPER"
                title="Subscribe to JB WEB DEVELOPER"
                className="font-pj inline-flex items-center justify-center rounded border border-transparent bg-gray-900 px-6 py-2 text-base font-bold leading-7 text-white transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                role="button"
              >
                Subscribe
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

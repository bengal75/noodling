import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import { Home, Menu, X, Crown, Heart, Star, Wine, Pizza, Sparkles } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="p-4 flex items-center bg-amber-900 text-white shadow-lg border-b-2 border-amber-600">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-amber-800 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <h1 className="ml-4 text-2xl font-bold flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-4xl">🧀</span>
            <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
              The Cheese Page
            </span>
          </Link>
        </h1>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-amber-950 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-amber-800">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="text-2xl">🧀</span>
            <span>Cheese Menu</span>
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-amber-900 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-900 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition-colors mb-2',
            }}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>

          <div className="mt-6 mb-3 px-3">
            <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Cheese Varieties
            </h3>
          </div>

          <Link
            to="/cheddar"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-900 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition-colors mb-2',
            }}
          >
            <Crown size={20} className="text-amber-400" />
            <span className="font-medium">Aged Cheddar</span>
          </Link>

          <Link
            to="/brie"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-900 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition-colors mb-2',
            }}
          >
            <Heart size={20} className="text-red-400" />
            <span className="font-medium">Brie</span>
          </Link>

          <Link
            to="/blue-cheese"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-900 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition-colors mb-2',
            }}
          >
            <Star size={20} className="text-blue-400" />
            <span className="font-medium">Blue Cheese</span>
          </Link>

          <Link
            to="/gouda"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-900 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition-colors mb-2',
            }}
          >
            <Wine size={20} className="text-purple-400" />
            <span className="font-medium">Gouda</span>
          </Link>

          <Link
            to="/mozzarella"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-900 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition-colors mb-2',
            }}
          >
            <Pizza size={20} className="text-yellow-400" />
            <span className="font-medium">Mozzarella</span>
          </Link>

          <Link
            to="/parmesan"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-900 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition-colors mb-2',
            }}
          >
            <Sparkles size={20} className="text-orange-400" />
            <span className="font-medium">Parmesan</span>
          </Link>

          {/* Demo Links Start */}

          {/* Demo Links End */}
        </nav>
      </aside>
    </>
  )
}

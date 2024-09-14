import React from 'react'

export const Navbar: React.FC = () => (
  <nav className="bg-white shadow-md py-4 mb-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Title on the left with icon */}
      <div className="flex items-center text-black text-2xl font-bold w-full">
        <RiNeteaseCloudMusicLine className="text-purple-600 mr-2 text-3xl" />{' '}
        {/* Icon with margin */}
        <Link to="/" className="text-black font-bold text-3xl">
          SoundCompanion
        </Link>
      </div>
      {/* Navigation links and button */}
      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-gray-800 hover:text-blue-600 transition duration-300 text-xl"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-800 hover:text-blue-600 transition duration-300 text-xl"
        >
          About
        </Link>
        <Link
          to="/products"
          className="text-gray-800 hover:text-blue-600 transition duration-300 text-xl"
        >
          Products
        </Link>
        <Link
          to="/contact"
          className="text-gray-800 hover:text-blue-600 transition duration-300 text-xl"
        >
          Contact
        </Link>
        <button className="bg-blue-600 text-white py-1 px-4 rounded-lg shadow-md duration-200 h-12 flex items-center justify-center mb-4 text-xl">
          <Link to="/join" className="text-white">
            Join
          </Link>
        </button>
      </div>
    </div>
  </nav>
)

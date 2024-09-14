import React from 'react'
import { RiNeteaseCloudMusicLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Button } from './Ui/Button'

export const Navbar: React.FC = () => (
  <nav className="bg-white sticky top-0 justify-center flex items-center shadow-md py-4 mb-4">
    <div className="container md:w-[80%] mx-auto flex justify-between items-center">
      {/* Title on the left with icon */}
      <div className="flex items-center text-black text-2xl font-bold w-full">
        {/* Icon with margin */}
        <Link to="/" className="text-black font-bold text-3xl">
          <RiNeteaseCloudMusicLine className="text-purple-600 mr-2 text-3xl" />{' '}
        </Link>
      </div>
      {/* Navigation links and button */}
      <div className="flex items-center space-x-6">
        <Link to={"/ai-tools"} className='border-b text-nowrap shadow-sm p-2 '>
        Ai-tools
        </Link>
        <Button variant="default" className="bg-pink-600">
          <Link to="/join" className="text-white">
            Join
          </Link>
        </Button>
      </div>
    </div>
  </nav>
)

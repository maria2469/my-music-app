import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black flex items-center py-4 px-6">
      {/* Unique text on the left */}
      <div className="flex-grow text-left">
        <Link to="/" className="text-black text-3xl font-bold">
          Harmonize Your World: Generate Music That Moves You.<br/>
          Transform your musical ideas into reality.
        </Link>
      </div>
      {/* Image on the right */}
      <div className="flex-shrink-0 w-1/2">
        <img 
          src="/bgimage.jpg"  // Adjust path if needed
          alt="Header Image" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;

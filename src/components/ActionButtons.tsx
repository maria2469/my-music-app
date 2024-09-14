import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation (optional)

const ActionButtons: React.FC = () => {
  return (
    <div className="flex space-x-10 justify-start mt-0 px-5">
      {/* Join Community Button */}
      <Link to="/join-community"> {/* Change this to the correct path or remove if not using React Router */}
      <button className="border-2 border-black text-black py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300 text-lg">
  Join Community
</button>

      </Link>
      
      {/* Get Started Button */}
      <Link to="/Musicgenerator"> {/* Change this to the correct path or remove if not using React Router */}
        <button className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300 text-lg">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default ActionButtons;

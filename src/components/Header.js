import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Home, Eye, Compass, PenTool } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-github-dark-secondary border-b border-github-border">
      <div className="container mx-auto px-4 py-3 flex items-center">
        <button
          onClick={toggleSidebar}
          className="mr-4 p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-white text-xl font-bold mr-4">Customer Service App</h1>
        <div className="flex-grow flex items-center justify-between">
          <input
            type="text"
            placeholder="Search or jump to..."
            className="bg-github-dark text-sm rounded border border-github-border px-3 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <nav>
            <ul className="flex space-x-4 text-sm">
              <li><Link to="/" className="hover:text-gray-400 flex items-center"><Home size={16} className="mr-1" /> Home</Link></li>
              <li><Link to="/vision" className="hover:text-gray-400 flex items-center"><Eye size={16} className="mr-1" /> Vision</Link></li>
              <li><Link to="/create" className="hover:text-gray-400 flex items-center"><PenTool size={16} className="mr-1" /> Create</Link></li>
              <li><Link to="/explore" className="hover:text-gray-400 flex items-center"><Compass size={16} className="mr-1" /> Explore</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
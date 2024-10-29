import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, MapPin, User } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around py-3">
          <Link
            to="/"
            className={`flex flex-col items-center space-y-1 ${
              isActive('/') ? 'text-emerald-600' : 'text-gray-600'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </Link>
          
          <Link
            to="/fields"
            className={`flex flex-col items-center space-y-1 ${
              isActive('/fields') ? 'text-emerald-600' : 'text-gray-600'
            }`}
          >
            <MapPin className="w-6 h-6" />
            <span className="text-xs">Fields</span>
          </Link>
          
          <Link
            to="/matches"
            className={`flex flex-col items-center space-y-1 ${
              isActive('/matches') ? 'text-emerald-600' : 'text-gray-600'
            }`}
          >
            <Calendar className="w-6 h-6" />
            <span className="text-xs">Matches</span>
          </Link>
          
          <Link
            to="/profile"
            className={`flex flex-col items-center space-y-1 ${
              isActive('/profile') ? 'text-emerald-600' : 'text-gray-600'
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
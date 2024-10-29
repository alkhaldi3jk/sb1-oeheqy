import React from 'react';
import { Home, Calendar, Bell, UserCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-emerald-600">
                FieldFinder
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/notifications"
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <Bell className="w-6 h-6 text-gray-600" />
              </Link>
              <Link
                to="/profile"
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <UserCircle className="w-6 h-6 text-gray-600" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-3">
            <Link
              to="/"
              className={`flex flex-col items-center ${
                isActive('/') ? 'text-emerald-600' : 'text-gray-600'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link
              to="/matches"
              className={`flex flex-col items-center ${
                isActive('/matches') ? 'text-emerald-600' : 'text-gray-600'
              }`}
            >
              <Calendar className="w-6 h-6" />
              <span className="text-xs mt-1">Matches</span>
            </Link>
            <Link
              to="/notifications"
              className={`flex flex-col items-center ${
                isActive('/notifications') ? 'text-emerald-600' : 'text-gray-600'
              }`}
            >
              <Bell className="w-6 h-6" />
              <span className="text-xs mt-1">Alerts</span>
            </Link>
            <Link
              to="/profile"
              className={`flex flex-col items-center ${
                isActive('/profile') ? 'text-emerald-600' : 'text-gray-600'
              }`}
            >
              <UserCircle className="w-6 h-6" />
              <span className="text-xs mt-1">Profile</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
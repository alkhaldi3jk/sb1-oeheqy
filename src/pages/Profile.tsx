import React from 'react';
import { useAuthStore } from '../stores/authStore';
import { useNavigate } from 'react-router-dom';
import { UserCircle, LogOut } from 'lucide-react';

export default function Profile() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 p-2 rounded-full">
            <UserCircle className="w-16 h-16 text-gray-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Account Settings
        </h2>
        <div className="space-y-4">
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50">
            Edit Profile
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50">
            Change Password
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50">
            Notification Settings
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-red-600 hover:bg-red-50"
          >
            <span>Logout</span>
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          My Statistics
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">12</div>
            <div className="text-sm text-gray-600">Matches Played</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">8</div>
            <div className="text-sm text-gray-600">Matches Won</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">15</div>
            <div className="text-sm text-gray-600">Goals Scored</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">4.8</div>
            <div className="text-sm text-gray-600">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Football, MapPin, Users } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div className="bg-emerald-600 text-white rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">
          Welcome{user ? `, ${user.name}` : ''}!
        </h1>
        <p className="text-emerald-100">Find and join football matches near you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-emerald-100 p-2 rounded-full">
              <Football className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-lg font-semibold">Quick Match</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Join an existing match or create your own
          </p>
          <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Find Matches
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-emerald-100 p-2 rounded-full">
              <MapPin className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-lg font-semibold">Nearby Fields</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Discover and book football fields in your area
          </p>
          <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            View Fields
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Upcoming Matches</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((match) => (
            <div
              key={match}
              className="flex items-center justify-between p-4 border border-gray-100 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <Users className="w-5 h-5 text-gray-400" />
                <div>
                  <h3 className="font-medium">Friendly Match #{match}</h3>
                  <p className="text-sm text-gray-500">Today at 18:00</p>
                </div>
              </div>
              <button className="px-4 py-2 text-sm bg-emerald-100 text-emerald-600 rounded-lg hover:bg-emerald-200 transition-colors">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
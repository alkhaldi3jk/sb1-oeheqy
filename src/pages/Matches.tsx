import React from 'react';
import { Plus, Calendar, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const SAMPLE_MATCHES = [
  {
    id: '1',
    fieldName: 'Green Valley Soccer Complex',
    location: 'Downtown Sports District',
    date: new Date(2024, 2, 25, 18, 0),
    maxPlayers: 22,
    currentPlayers: 15,
    status: 'open',
  },
  {
    id: '2',
    fieldName: 'Urban Football Arena',
    location: 'Central Park Area',
    date: new Date(2024, 2, 26, 20, 0),
    maxPlayers: 14,
    currentPlayers: 14,
    status: 'full',
  },
];

export default function Matches() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Upcoming Matches</h1>
        <Link
          to="/matches/create"
          className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span className="hidden sm:inline">Create Match</span>
        </Link>
      </div>

      <div className="grid gap-4">
        {SAMPLE_MATCHES.map((match) => (
          <div
            key={match.id}
            className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {match.fieldName}
                </h3>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {format(match.date, 'MMM d, yyyy h:mm a')}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {match.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {match.currentPlayers}/{match.maxPlayers} players
                  </div>
                </div>
              </div>
              <button
                className={`px-4 py-2 rounded-lg font-medium ${
                  match.status === 'full'
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
                disabled={match.status === 'full'}
              >
                {match.status === 'full' ? 'Full' : 'Join Match'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
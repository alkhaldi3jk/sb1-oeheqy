import React from 'react';
import { MapPin, Users, Star } from 'lucide-react';
import type { Field } from '../../types';

interface FieldCardProps {
  field: Field;
  onBook: (fieldId: string) => void;
}

export default function FieldCard({ field, onBook }: FieldCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48">
        <img
          src={field.images[0]}
          alt={field.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-emerald-600">
          ${field.pricePerHour}/hr
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{field.name}</h3>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          {field.location}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            {field.capacity} players
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
            {field.rating.toFixed(1)}
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <button
            onClick={() => onBook(field.id)}
            className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
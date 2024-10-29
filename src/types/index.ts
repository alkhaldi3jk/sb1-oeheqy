export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Field {
  id: string;
  name: string;
  location: string;
  capacity: number;
  pricePerHour: number;
  images: string[];
  amenities: string[];
  rating: number;
}

export interface Match {
  id: string;
  fieldId: string;
  organizerId: string;
  date: string;
  startTime: string;
  duration: number;
  maxPlayers: number;
  currentPlayers: number;
  isPrivate: boolean;
  inviteCode?: string;
  status: 'open' | 'full' | 'cancelled';
}

export interface Booking {
  id: string;
  fieldId: string;
  userId: string;
  date: string;
  startTime: string;
  duration: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}
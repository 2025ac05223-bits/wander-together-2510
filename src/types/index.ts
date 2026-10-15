export interface User {
  id: string;
  email: string;
  username: string;
  profilePhotoUrl?: string;
  bio?: string;
  location?: string;
}

export interface Trip {
  id: string;
  organizerId: string;
  title: string;
  description?: string;
  destinations: string[];
  startDate: string;
  endDate: string;
  tripType: 'adventure' | 'relaxation' | 'cultural' | 'family' | 'other';
  status: 'planning' | 'ongoing' | 'completed' | 'archived';
  privacy: 'private' | 'friends-only' | 'public';
  budgetTotal?: number;
  budgetCurrency: string;
  createdAt: string;
  updatedAt: string;
}

export interface Activity {
  id: string;
  title: string;
  description?: string;
  type: 'accommodation' | 'meal' | 'transport' | 'attraction' | 'other';
  startTime?: string;
  endTime?: string;
  location?: string;
  coordinates?: { lat: number; lng: number };
}

export interface Itinerary {
  id: string;
  tripId: string;
  dayNumber: number;
  date: string;
  activities: Activity[];
  notes?: string;
}

export interface Story {
  id: string;
  authorId: string;
  title: string;
  content: string;
  destinationTags: string[];
  travelStyleTags: string[];
  photos: StoryPhoto[];
  rating: number;
  reviewCount: number;
  privacy: 'private' | 'friends-only' | 'public' | 'unlisted';
  status: 'draft' | 'published' | 'archived';
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface StoryPhoto {
  id: string;
  url: string;
  caption?: string;
  coordinates?: { lat: number; lng: number };
}

export interface Hotel {
  id: string;
  externalId?: string;
  name: string;
  destination: string;
  coordinates?: { lat: number; lng: number };
  description?: string;
  amenities: string[];
  rating: number;
  reviewCount: number;
  photos: string[];
  priceRange: 'budget' | 'moderate' | 'luxury';
  cancellationPolicy?: string;
}

export interface Restaurant {
  id: string;
  externalId?: string;
  name: string;
  destination: string;
  cuisineTypes: string[];
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  rating: number;
  reviewCount: number;
  photos: string[];
  coordinates?: { lat: number; lng: number };
}

export interface Attraction {
  id: string;
  externalId?: string;
  name: string;
  destination: string;
  type: 'museum' | 'landmark' | 'nature' | 'temple' | 'market' | 'park' | 'other';
  description?: string;
  rating: number;
  reviewCount: number;
  photos: string[];
  coordinates?: { lat: number; lng: number };
  durationMinutes?: number;
  entranceFee?: number;
}

export interface Expense {
  id: string;
  tripId: string;
  payerId: string;
  category: 'flight' | 'hotel' | 'food' | 'activity' | 'transport' | 'other';
  description: string;
  amount: number;
  currency: string;
  paidDate: string;
}

export interface Comment {
  id: string;
  storyId: string;
  authorId: string;
  content: string;
  createdAt: string;
}

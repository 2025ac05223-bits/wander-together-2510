import { Trip, Story, Hotel, Restaurant, Attraction } from '@/types';

export const mockTrips: Trip[] = [
  {
    id: '1',
    organizerId: 'user1',
    title: 'Tokyo Adventure',
    description: 'Exploring the vibrant streets of Tokyo',
    destinations: ['Tokyo', 'Japan'],
    startDate: '2024-03-15',
    endDate: '2024-03-25',
    tripType: 'adventure',
    status: 'planning',
    privacy: 'public',
    budgetTotal: 3000,
    budgetCurrency: 'USD',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-15',
  },
  {
    id: '2',
    organizerId: 'user2',
    title: 'European Summer',
    description: 'A relaxing tour through Europe',
    destinations: ['Paris', 'Rome', 'Barcelona'],
    startDate: '2024-06-01',
    endDate: '2024-06-21',
    tripType: 'relaxation',
    status: 'planning',
    privacy: 'friends-only',
    budgetTotal: 5000,
    budgetCurrency: 'USD',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-12',
  },
];

export const mockStories: Story[] = [
  {
    id: '1',
    authorId: 'user1',
    title: 'Hidden Gems in Tokyo',
    content:
      'Discovered amazing street food in Shibuya and visited the serene temples of Tokyo. The culture is incredible!',
    destinationTags: ['Tokyo', 'Japan'],
    travelStyleTags: ['adventure', 'cultural', 'budget'],
    photos: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1540959375944-7049f642fdf9?w=800',
        caption: 'Shibuya Crossing at night',
      },
    ],
    rating: 4.5,
    reviewCount: 23,
    privacy: 'public',
    status: 'published',
    publishedAt: '2024-01-15',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
  {
    id: '2',
    authorId: 'user2',
    title: 'Paris in Spring',
    content: 'Walked along the Seine, enjoyed fresh croissants, and fell in love with the Eiffel Tower.',
    destinationTags: ['Paris', 'France'],
    travelStyleTags: ['relaxation', 'romantic', 'luxury'],
    photos: [
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1499856871957-5b8620a32237?w=800',
        caption: 'Eiffel Tower view',
      },
    ],
    rating: 5,
    reviewCount: 45,
    privacy: 'public',
    status: 'published',
    publishedAt: '2024-01-10',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10',
  },
];

export const mockHotels: Hotel[] = [
  {
    id: '1',
    name: 'Luxury Tokyo Tower Hotel',
    destination: 'Tokyo, Japan',
    description: 'Upscale hotel with stunning tower views',
    amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant', 'Spa'],
    rating: 4.8,
    reviewCount: 234,
    photos: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
    ],
    priceRange: 'luxury',
    coordinates: { lat: 35.6895, lng: 139.6917 },
  },
  {
    id: '2',
    name: 'Budget Friendly Tokyo Inn',
    destination: 'Tokyo, Japan',
    description: 'Clean and comfortable budget accommodation',
    amenities: ['WiFi', 'Air Conditioning', 'Shared Kitchen'],
    rating: 4.2,
    reviewCount: 156,
    photos: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800'],
    priceRange: 'budget',
    coordinates: { lat: 35.68, lng: 139.69 },
  },
];

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Tsukiji Outer Market Sushi',
    destination: 'Tokyo, Japan',
    cuisineTypes: ['Japanese', 'Sushi'],
    priceRange: '$$',
    rating: 4.7,
    reviewCount: 328,
    photos: [
      'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
    ],
    coordinates: { lat: 35.664, lng: 139.7736 },
  },
  {
    id: '2',
    name: 'Ramen Alley Classic',
    destination: 'Tokyo, Japan',
    cuisineTypes: ['Japanese', 'Ramen'],
    priceRange: '$',
    rating: 4.5,
    reviewCount: 512,
    photos: [
      'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
    ],
    coordinates: { lat: 35.6645, lng: 139.765 },
  },
];

export const mockAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Senso-ji Temple',
    destination: 'Tokyo, Japan',
    type: 'temple',
    description: 'Ancient Buddhist temple with beautiful architecture',
    rating: 4.6,
    reviewCount: 1250,
    photos: [
      'https://images.unsplash.com/photo-1528164344705-47542687c6f1?w=800',
    ],
    coordinates: { lat: 35.7149, lng: 139.7967 },
    durationMinutes: 60,
    entranceFee: 0,
  },
  {
    id: '2',
    name: 'Meiji Shrine',
    destination: 'Tokyo, Japan',
    type: 'shrine',
    description: 'Peaceful Shinto shrine surrounded by forest',
    rating: 4.8,
    reviewCount: 890,
    photos: [
      'https://images.unsplash.com/photo-1528164344705-47542687c6f1?w=800',
    ],
    coordinates: { lat: 35.6762, lng: 139.7009 },
    durationMinutes: 45,
    entranceFee: 0,
  },
];

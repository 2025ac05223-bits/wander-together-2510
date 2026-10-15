'use client';

import { Button } from '@/components/ui';
import { HotelCard } from '@/components/search/HotelCard';
import { AttractionCard } from '@/components/search/AttractionCard';
import { mockHotels, mockRestaurants, mockAttractions } from '@/lib/mockData';
import { Search, MapPin } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const destination = searchParams.get('destination') || '';
  const [searchDestination, setSearchDestination] = useState(destination);
  const [activeTab, setActiveTab] = useState<'hotels' | 'restaurants' | 'attractions'>(
    'hotels'
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const tabs = [
    { id: 'hotels', label: '🏨 Hotels', count: mockHotels.length },
    {
      id: 'restaurants',
      label: '🍴 Restaurants',
      count: mockRestaurants.length,
    },
    {
      id: 'attractions',
      label: '🎯 Attractions',
      count: mockAttractions.length,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Search {searchDestination && `in ${searchDestination}`}
          </h1>

          <form onSubmit={handleSearch} className="bg-white">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={searchDestination}
                  onChange={(e) => setSearchDestination(e.target.value)}
                  className="input-field pl-10"
                />
              </div>
              <Button type="submit" className="flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-4 border-b-2 font-medium transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
                <span className="ml-2 text-sm bg-gray-100 px-2 py-1 rounded">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Price Range
              </label>
              <select className="input-field">
                <option>All Prices</option>
                <option>Budget ($)</option>
                <option>Moderate ($$)</option>
                <option>Luxury ($$$)</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Rating
              </label>
              <select className="input-field">
                <option>All Ratings</option>
                <option>4.5+ ⭐</option>
                <option>4.0+ ⭐</option>
                <option>3.5+ ⭐</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Availability
              </label>
              <select className="input-field">
                <option>Any Date</option>
                <option>This Week</option>
                <option>Next Week</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Sort By
              </label>
              <select className="input-field">
                <option>Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {activeTab === 'hotels' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        )}

        {activeTab === 'attractions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockAttractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        )}

        {activeTab === 'restaurants' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
                <div className="h-40 bg-gray-200 rounded-lg mb-4" />
                <h3 className="text-lg font-bold text-gray-900">{restaurant.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{restaurant.cuisineTypes.join(', ')}</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary-600">
                    {restaurant.rating.toFixed(1)} ⭐
                  </span>
                  <span className="text-sm text-gray-600">
                    ({restaurant.reviewCount})
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

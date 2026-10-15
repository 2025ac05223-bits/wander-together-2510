'use client';

import { Card, Button, Badge } from '@/components/ui';
import { mockHotels } from '@/lib/mockData';
import { Heart, MapPin, Wifi, AirVent, UtensilsCrossed, Info } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function HotelDetailPage() {
  const params = useParams();
  const hotelId = params.id as string;
  const hotel = mockHotels.find((h) => h.id === hotelId);
  const [liked, setLiked] = useState(false);

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Hotel not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gallery */}
      <div className="relative h-96 w-full bg-gray-200">
        {hotel.photos[0] && (
          <Image
            src={hotel.photos[0]}
            alt={hotel.name}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  {hotel.destination}
                </div>
              </div>
              <button
                onClick={() => setLiked(!liked)}
                className="p-3 hover:bg-gray-100 rounded-full transition"
              >
                <Heart
                  className={`w-6 h-6 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                />
              </button>
            </div>

            {/* Rating */}
            <Card className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold text-primary-600">
                  {hotel.rating.toFixed(1)}
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="text-xl">
                          {i < Math.round(hotel.rating) ? '★' : '☆'}
                        </span>
                      ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Based on {hotel.reviewCount} reviews
                  </p>
                </div>
              </div>
            </Card>

            {/* Amenities */}
            <Card className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 text-gray-700">
                    <Wifi className="w-5 h-5 text-primary-500" />
                    {amenity}
                  </div>
                ))}
              </div>
            </Card>

            {/* Description */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">
                {hotel.description || 'Discover a wonderful stay at this property with premium amenities and excellent service.'}
              </p>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card>
              <h3 className="font-bold text-gray-900 mb-4">Room Options</h3>
              <div className="space-y-3 mb-4">
                <div className="pb-3 border-b border-gray-200">
                  <p className="font-semibold text-gray-900">Standard Room</p>
                  <p className="text-2xl font-bold text-primary-600 mt-1">$89/night</p>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <p className="font-semibold text-gray-900">Deluxe Room</p>
                  <p className="text-2xl font-bold text-primary-600 mt-1">$149/night</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Suite</p>
                  <p className="text-2xl font-bold text-primary-600 mt-1">$249/night</p>
                </div>
              </div>
              <Button className="w-full mb-2">Check Availability</Button>
              <Button variant="outlined" className="w-full">
                Book Now
              </Button>
            </Card>

            {/* Policy */}
            <Card>
              <h3 className="font-bold text-gray-900 mb-4">Cancellation Policy</h3>
              <p className="text-sm text-gray-600">
                {hotel.cancellationPolicy || 'Free cancellation up to 24 hours before check-in'}
              </p>
            </Card>

            {/* Info Card */}
            <Card>
              <h3 className="font-bold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Check-in</p>
                  <p className="font-semibold text-gray-900">2:00 PM</p>
                </div>
                <div>
                  <p className="text-gray-600">Check-out</p>
                  <p className="font-semibold text-gray-900">11:00 AM</p>
                </div>
                <div>
                  <p className="text-gray-600">Price Range</p>
                  <Badge variant="primary">{hotel.priceRange}</Badge>
                </div>
              </div>
            </Card>

            {/* Add to Trip */}
            <Button className="w-full">+ Add to Trip</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { Hotel } from '@/types';
import { Card, Badge } from '@/components/ui';
import { Heart, MapPin, Wifi, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useUIStore } from '@/store/useUIStore';

export function HotelCard({ hotel }: { hotel: Hotel }) {
  const toggleWishlist = useUIStore((s) => s.toggleWishlist);
  const wishlistHotels = useUIStore((s) => s.wishlistHotels);
  const isWishlisted = wishlistHotels.includes(hotel.id);

  return (
    <Link href={`/hotels/${hotel.id}`}>
      <Card className="hover:shadow-lg cursor-pointer overflow-hidden h-full">
        <div className="relative h-48 mb-4">
          <Image
            src={hotel.photos[0] || 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800'}
            alt={hotel.name}
            fill
            className="object-cover rounded-lg"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(hotel.id);
            }}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <Heart
              className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
            />
          </button>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
              {hotel.name}
            </h3>
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
              <MapPin className="w-4 h-4 text-primary-500" />
              {hotel.destination}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary-600">
              {hotel.rating.toFixed(1)} ⭐
            </span>
            <span className="text-sm text-gray-600">({hotel.reviewCount} reviews)</span>
          </div>

          <div className="flex flex-wrap gap-1">
            {hotel.amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded"
              >
                {amenity}
              </span>
            ))}
          </div>

          <Badge variant={hotel.priceRange === 'luxury' ? 'primary' : 'success'}>
            {hotel.priceRange}
          </Badge>
        </div>
      </Card>
    </Link>
  );
}

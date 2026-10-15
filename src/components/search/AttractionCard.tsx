'use client';

import { Attraction } from '@/types';
import { Card, Badge } from '@/components/ui';
import { Clock, DollarSign, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <Link href={`/attractions/${attraction.id}`}>
      <Card className="hover:shadow-lg cursor-pointer overflow-hidden h-full">
        <div className="relative h-48 mb-4">
          <Image
            src={attraction.photos[0] || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800'}
            alt={attraction.name}
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="primary">{attraction.type}</Badge>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
            {attraction.name}
          </h3>

          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-primary-500" />
            {attraction.destination}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary-600">
              {attraction.rating.toFixed(1)} ⭐
            </span>
            <span className="text-sm text-gray-600">({attraction.reviewCount})</span>
          </div>

          <div className="flex gap-4 text-sm text-gray-600">
            {attraction.durationMinutes && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {attraction.durationMinutes}m
              </div>
            )}
            {attraction.entranceFee !== undefined && (
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                {attraction.entranceFee === 0 ? 'Free' : `$${attraction.entranceFee}`}
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}

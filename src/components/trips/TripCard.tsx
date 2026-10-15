'use client';

import { Trip } from '@/types';
import { Card, Badge } from '@/components/ui';
import { formatDate, tripDuration } from '@/lib/utils';
import Link from 'next/link';
import { Calendar, MapPin, Users } from 'lucide-react';

export function TripCard({ trip }: { trip: Trip }) {
  const duration = tripDuration(trip.startDate, trip.endDate);

  return (
    <Link href={`/trips/${trip.id}`}>
      <Card className="hover:shadow-lg cursor-pointer h-full">
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
            {trip.title}
          </h3>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary-500" />
              <span>{trip.destinations.join(', ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary-500" />
              <span>{formatDate(trip.startDate)} • {duration} days</span>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap pt-2">
            <Badge variant="primary">{trip.tripType}</Badge>
            <Badge variant="success">{trip.status}</Badge>
          </div>

          {trip.budgetTotal && (
            <p className="text-sm font-semibold text-gray-900 pt-2">
              Budget: ${trip.budgetTotal}
            </p>
          )}
        </div>
      </Card>
    </Link>
  );
}

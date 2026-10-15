'use client';

import { Button } from '@/components/ui';
import { TripCard } from '@/components/trips/TripCard';
import { mockTrips } from '@/lib/mockData';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function TripsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">My Trips</h1>
            <p className="text-gray-600">
              Plan your next adventure with your travel buddies
            </p>
          </div>
          <Link href="/trips/new">
            <Button size="lg" className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Create Trip
            </Button>
          </Link>
        </div>

        {mockTrips.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg">
            <p className="text-gray-600 mb-4">No trips yet. Start planning your adventure!</p>
            <Link href="/trips/new">
              <Button>Create Your First Trip</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

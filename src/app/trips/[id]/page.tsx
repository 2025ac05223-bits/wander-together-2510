'use client';

import { Card, Button, Badge } from '@/components/ui';
import { mockTrips } from '@/lib/mockData';
import { formatDate, tripDuration } from '@/lib/utils';
import { Calendar, MapPin, DollarSign, Users, Plus } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function TripDetailPage() {
  const params = useParams();
  const tripId = params.id as string;
  const trip = mockTrips.find((t) => t.id === tripId);

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Trip not found</h1>
          <Button href="/trips">Back to Trips</Button>
        </div>
      </div>
    );
  }

  const duration = tripDuration(trip.startDate, trip.endDate);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">{trip.title}</h1>
          <p className="text-primary-100 mb-6">{trip.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <div>
                <p className="text-sm opacity-90">Destination</p>
                <p className="font-semibold">{trip.destinations.join(', ')}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <div>
                <p className="text-sm opacity-90">Duration</p>
                <p className="font-semibold">{duration} days</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <div>
                <p className="text-sm opacity-90">Dates</p>
                <p className="font-semibold text-sm">{formatDate(trip.startDate)}</p>
              </div>
            </div>
            {trip.budgetTotal && (
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <div>
                  <p className="text-sm opacity-90">Budget</p>
                  <p className="font-semibold">${trip.budgetTotal}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Itinerary Section */}
            <Card>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Itinerary</h2>
                <Button size="sm" className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Activity
                </Button>
              </div>

              <div className="space-y-4">
                {Array.from({ length: duration }).map((_, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4 py-4">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Day {index + 1} - {formatDate(new Date(new Date(trip.startDate).getTime() + index * 24 * 60 * 60 * 1000))}
                    </h3>
                    <p className="text-gray-600">Add activities for this day</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Budget Tracker */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Budget Tracker</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Budget</span>
                  <span className="text-lg font-bold text-primary-600">
                    ${trip.budgetTotal || 0}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Spent</span>
                  <span className="text-lg font-bold text-gray-900">$0.00</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-primary-500 h-3 rounded-full w-0%"></div>
                </div>
                <Button variant="outlined" size="sm">
                  Add Expense
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status Card */}
            <Card>
              <h3 className="font-bold text-gray-900 mb-4">Trip Status</h3>
              <Badge variant={trip.status === 'planning' ? 'primary' : 'success'}>
                {trip.status}
              </Badge>
              <div className="mt-4 space-y-2">
                <Button variant="outlined" size="sm" className="w-full">
                  Edit Details
                </Button>
                <Button variant="secondary" size="sm" className="w-full">
                  Share Trip
                </Button>
              </div>
            </Card>

            {/* Travelers Card */}
            <Card>
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Travelers
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  Y
                </div>
                <span className="text-sm text-gray-600">You (Organizer)</span>
              </div>
              <Button variant="outlined" size="sm" className="w-full">
                Invite Travelers
              </Button>
            </Card>

            {/* Destination Info */}
            <Card>
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Button variant="secondary" size="sm" className="w-full justify-start">
                  📱 Hotels
                </Button>
                <Button variant="secondary" size="sm" className="w-full justify-start">
                  🍴 Restaurants
                </Button>
                <Button variant="secondary" size="sm" className="w-full justify-start">
                  🎯 Attractions
                </Button>
                <Button variant="secondary" size="sm" className="w-full justify-start">
                  ✈️ Transport
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

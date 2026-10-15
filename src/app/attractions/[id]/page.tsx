'use client';

import { Card, Button, Badge } from '@/components/ui';
import { mockAttractions } from '@/lib/mockData';
import { Clock, DollarSign, MapPin, BookOpen, Accessibility } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function AttractionDetailPage() {
  const params = useParams();
  const attractionId = params.id as string;
  const attraction = mockAttractions.find((a) => a.id === attractionId);

  if (!attraction) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Attraction not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 w-full bg-gray-200">
        {attraction.photos[0] && (
          <Image
            src={attraction.photos[0]}
            alt={attraction.name}
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
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="primary">{attraction.type}</Badge>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{attraction.name}</h1>
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <MapPin className="w-5 h-5 text-primary-500" />
                {attraction.destination}
              </div>
            </div>

            {/* Rating Card */}
            <Card className="mb-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-primary-600">
                  {attraction.rating.toFixed(1)}
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="text-xl">
                          {i < Math.round(attraction.rating) ? '★' : '☆'}
                        </span>
                      ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Based on {attraction.reviewCount} reviews
                  </p>
                </div>
              </div>
            </Card>

            {/* Description */}
            <Card className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">
                {attraction.description ||
                  'A wonderful place to visit with rich history and cultural significance. Perfect for all ages and interests.'}
              </p>
            </Card>

            {/* Details */}
            <Card className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {attraction.durationMinutes && (
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-600">Recommended Time</p>
                      <p className="font-semibold text-gray-900">
                        {attraction.durationMinutes} minutes
                      </p>
                    </div>
                  </div>
                )}
                {attraction.entranceFee !== undefined && (
                  <div className="flex items-start gap-4">
                    <DollarSign className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-600">Entrance Fee</p>
                      <p className="font-semibold text-gray-900">
                        {attraction.entranceFee === 0 ? 'Free' : `$${attraction.entranceFee}`}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Accessibility */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Accessibility className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-700">Wheelchair accessible</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-700">Audio guides available</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <Card>
              <h3 className="font-bold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Rating</p>
                  <p className="font-semibold text-gray-900">
                    {attraction.rating.toFixed(1)}/5.0
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Reviews</p>
                  <p className="font-semibold text-gray-900">{attraction.reviewCount}</p>
                </div>
                <div>
                  <p className="text-gray-600">Category</p>
                  <p className="font-semibold text-gray-900 capitalize">
                    {attraction.type}
                  </p>
                </div>
              </div>
            </Card>

            {/* Opening Hours */}
            <Card>
              <h3 className="font-bold text-gray-900 mb-4">Opening Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday - Sunday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 7:00 PM</span>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Button className="w-full">Add to Itinerary</Button>
              <Button variant="secondary" className="w-full">
                Visit Website
              </Button>
              <Button variant="outlined" className="w-full">
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

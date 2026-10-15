'use client';

import { HeroSearch } from '@/components/common/HeroSearch';
import { StoryCard } from '@/components/stories/StoryCard';
import { TripCard } from '@/components/trips/TripCard';
import { Button } from '@/components/ui';
import { mockStories, mockTrips } from '@/lib/mockData';
import { Compass, Users, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Plan, Explore & Share
              <span className="text-primary-500"> Travel Stories</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Wander Together is your all-in-one platform for planning trips with friends,
              discovering authentic travel experiences, and booking accommodations.
            </p>
          </div>

          <HeroSearch />

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            {[
              {
                icon: MapPin,
                title: 'Plan Trips',
                description: 'Create collaborative itineraries with your travel buddies',
              },
              {
                icon: Compass,
                title: 'Discover Stories',
                description: 'Read authentic travel experiences from real travelers',
              },
              {
                icon: Users,
                title: 'Connect',
                description: 'Find travel buddies and share your adventures together',
              },
              {
                icon: Sparkles,
                title: 'Book',
                description: 'Find and book hotels, restaurants, and attractions easily',
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center p-6 rounded-lg bg-white shadow-sm">
                <div className="inline-block p-3 bg-primary-100 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Trips Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Trips</h2>
          <Link href="/trips">
            <Button variant="outlined">View All Trips</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Travel Stories</h2>
            <Link href="/stories">
              <Button variant="outlined">View All Stories</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of travelers planning and sharing their journeys
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/auth/register">
              <Button variant="secondary" size="lg">
                Sign Up Free
              </Button>
            </Link>
            <Link href="/stories">
              <Button
                variant="outlined"
                size="lg"
                className="!text-white !border-white hover:!bg-primary-500"
              >
                Explore Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

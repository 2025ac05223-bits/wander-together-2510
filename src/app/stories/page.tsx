'use client';

import { Button } from '@/components/ui';
import { StoryCard } from '@/components/stories/StoryCard';
import { mockStories } from '@/lib/mockData';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Travel Stories</h1>
            <p className="text-gray-600">
              Discover authentic travel experiences from our community
            </p>
          </div>
          <Link href="/stories/new">
            <Button size="lg" className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Share Story
            </Button>
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {['All', 'Adventure', 'Relaxation', 'Cultural', 'Budget', 'Luxury'].map(
            (tab) => (
              <button
                key={tab}
                className="px-4 py-2 rounded-full border-2 border-gray-200 text-gray-700 hover:border-primary-500 hover:text-primary-500 transition whitespace-nowrap"
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outlined" size="lg">
            Load More Stories
          </Button>
        </div>
      </div>
    </div>
  );
}

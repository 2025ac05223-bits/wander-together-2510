'use client';

import { Card, Badge, Button } from '@/components/ui';
import { mockStories } from '@/lib/mockData';
import { formatDate, formatRelativeDate } from '@/lib/utils';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function StoryDetailPage() {
  const params = useParams();
  const storyId = params.id as string;
  const story = mockStories.find((s) => s.id === storyId);
  const [liked, setLiked] = useState(false);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Story not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      {story.photos[0] && (
        <div className="relative h-96 w-full">
          <Image
            src={story.photos[0].url}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">{story.title}</h1>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                  U
                </div>
                <div>
                  <p className="font-bold text-gray-900">Travel Enthusiast</p>
                  <p className="text-sm text-gray-600">
                    {formatRelativeDate(story.publishedAt || story.createdAt)}
                  </p>
                </div>
              </div>

              <div className="prose prose-sm max-w-none mb-6">
                <p className="text-gray-700 leading-relaxed">{story.content}</p>
              </div>

              {/* Photo Gallery */}
              {story.photos.length > 0 && (
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    {story.photos.map((photo) => (
                      <div key={photo.id} className="relative h-48">
                        <Image
                          src={photo.url}
                          alt={photo.caption || 'Story photo'}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {story.destinationTags.map((tag) => (
                  <Badge key={tag} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Engagement */}
              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setLiked(!liked)}
                  className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition"
                >
                  <Heart
                    className={`w-5 h-5 ${liked ? 'fill-red-500 text-red-500' : ''}`}
                  />
                  <span>{liked ? 'Liked' : 'Like'}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition">
                  <MessageCircle className="w-5 h-5" />
                  <span>Comment</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </Card>

            {/* Comments Section */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Comments</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="font-semibold text-gray-900 text-sm">Your Name</p>
                      <textarea
                        placeholder="Share your thoughts..."
                        className="w-full mt-2 p-2 border border-gray-300 rounded text-sm resize-none"
                        rows={3}
                      />
                    </div>
                    <Button size="sm" className="mt-2">
                      Post Comment
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Info Card */}
            <Card>
              <h3 className="font-bold text-gray-900 mb-4">Trip Info</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Destinations</p>
                  <p className="font-semibold text-gray-900">
                    {story.destinationTags.join(', ')}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Travel Style</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {story.travelStyleTags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="success">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Rating Card */}
            <Card>
              <h3 className="font-bold text-gray-900 mb-4">Rating</h3>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {story.rating.toFixed(1)}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${i < Math.round(story.rating) ? '⭐' : '☆'}`}
                      >
                        {i < Math.round(story.rating) ? '★' : '☆'}
                      </span>
                    ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({story.reviewCount} reviews)
                </span>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Button className="w-full">Save Story</Button>
              <Button variant="secondary" className="w-full">
                Visit Destination
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

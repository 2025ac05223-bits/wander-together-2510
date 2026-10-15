'use client';

import { Story } from '@/types';
import { Card, Badge } from '@/components/ui';
import { Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function StoryCard({ story }: { story: Story }) {
  const backgroundImage = story.photos[0]?.url || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800';

  return (
    <Link href={`/stories/${story.id}`}>
      <Card className="hover:shadow-lg cursor-pointer overflow-hidden h-full">
        <div className="relative h-48 mb-4">
          <Image
            src={backgroundImage}
            alt={story.title}
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="primary">{story.rating.toFixed(1)} ⭐</Badge>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
            {story.title}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-2">
            {story.content}
          </p>

          <div className="flex flex-wrap gap-1">
            {story.destinationTags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-3 border-t border-gray-100 text-gray-600">
            <div className="flex items-center gap-1 text-sm">
              <Heart className="w-4 h-4" />
              <span>{story.rating * 10}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <MessageCircle className="w-4 h-4" />
              <span>{story.reviewCount}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

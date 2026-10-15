'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function HeroSearch() {
  const [destination, setDestination] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination.trim()) {
      router.push(`/search?destination=${encodeURIComponent(destination)}`);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSearch}
        className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="input-field"
            />
          </div>
          <button type="submit" className="btn-primary flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>
      </form>
    </div>
  );
}

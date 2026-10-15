'use client';

import Link from 'next/link';
import { MapPin, Search, User, Menu } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary-700 hidden sm:block">
              Wander Together
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/trips"
              className="text-gray-700 hover:text-primary-500 font-medium transition"
            >
              Trips
            </Link>
            <Link
              href="/stories"
              className="text-gray-700 hover:text-primary-500 font-medium transition"
            >
              Stories
            </Link>
            <Link
              href="/search"
              className="text-gray-700 hover:text-primary-500 font-medium transition"
            >
              Search
            </Link>
            <Link
              href="/auth/login"
              className="px-4 py-2 text-primary-600 border border-primary-500 rounded-lg hover:bg-primary-50 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/trips"
              className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-lg"
            >
              Trips
            </Link>
            <Link
              href="/stories"
              className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-lg"
            >
              Stories
            </Link>
            <Link
              href="/search"
              className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-lg"
            >
              Search
            </Link>
            <Link
              href="/auth/login"
              className="block px-4 py-2 text-primary-600 border border-primary-500 rounded-lg text-center"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

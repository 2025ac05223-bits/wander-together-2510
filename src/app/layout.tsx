import type { Metadata } from 'next';
import { Navbar } from '@/components/common/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wander Together - Travel Planning & Stories',
  description:
    'Plan trips collaboratively, discover travel stories, and book accommodations all in one place.',
  keywords: ['travel', 'trip planning', 'stories', 'adventures'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-gray-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Wander Together</h3>
                <p className="text-gray-400 text-sm">
                  Plan, discover, and share travel experiences with the world.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Explore</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <a href="/trips" className="hover:text-white transition">
                      Trips
                    </a>
                  </li>
                  <li>
                    <a href="/stories" className="hover:text-white transition">
                      Stories
                    </a>
                  </li>
                  <li>
                    <a href="/search" className="hover:text-white transition">
                      Search
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Account</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <a href="/auth/login" className="hover:text-white transition">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="/auth/register" className="hover:text-white transition">
                      Register
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <a href="/privacy" className="hover:text-white transition">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-white transition">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 Wander Together. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

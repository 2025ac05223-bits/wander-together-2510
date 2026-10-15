# Wander Together - Travel Planning & Stories Platform

A comprehensive social travel platform built with Next.js 14, React, and Tailwind CSS. Plan trips collaboratively, share travel stories, and book accommodations all in one place.

## 🚀 Features

- **Trip Planning**: Create and manage collaborative trips with detailed itineraries
- **Travel Stories**: Share and discover authentic travel experiences with photos
- **Search**: Find hotels, restaurants, attractions, and transportation options
- **User Profiles**: Connect with other travelers and follow their journeys
- **Budget Tracking**: Manage shared trip expenses and split bills
- **Interactive Maps**: Explore destinations with Mapbox integration
- **Real-time Collaboration**: Plan trips together in real-time
- **Mobile-First Design**: Beautiful, responsive UI for all screen sizes

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Server State**: [TanStack Query](https://tanstack.com/query/latest)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Maps**: [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/)
- **Icons**: [lucide-react](https://lucide.dev/)
- **Dates**: [date-fns](https://date-fns.org/)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wander-together.git
   cd wander-together
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your API keys:
   ```
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
wander-together/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── trips/             # Trip pages
│   │   ├── stories/           # Story pages
│   │   ├── search/            # Search results
│   │   ├── auth/              # Authentication
│   │   ├── hotels/            # Hotel details
│   │   └── attractions/       # Attraction details
│   ├── components/
│   │   ├── common/            # Navbar, HeroSearch
│   │   ├── ui/                # Reusable UI components
│   │   ├── trips/             # Trip-specific components
│   │   ├── stories/           # Story-specific components
│   │   └── search/            # Search-specific components
│   ├── lib/
│   │   ├── utils.ts           # Utility functions
│   │   └── mockData.ts        # Mock data for development
│   ├── store/
│   │   └── useUIStore.ts      # Zustand UI state store
│   └── types/
│       └── index.ts           # TypeScript type definitions
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## 🎨 Theme & Colors

The app uses a light blue color scheme with Tailwind CSS. Primary colors:

- **Primary-50**: `#f0f9ff`
- **Primary-500**: `#0ea5e9` (Main blue)
- **Primary-600**: `#0284c7` (Darker blue)

Customize colors in `tailwind.config.ts`.

## 🌐 Pages & Routes

- `/` - Landing page
- `/trips` - My trips list
- `/trips/new` - Create new trip
- `/trips/[id]` - Trip detail & itinerary
- `/stories` - Travel stories feed
- `/stories/new` - Share new story
- `/stories/[id]` - Story detail
- `/search` - Search hotels, restaurants, attractions
- `/hotels/[id]` - Hotel detail
- `/attractions/[id]` - Attraction detail
- `/auth/login` - Login page
- `/auth/register` - Register page

## 🔧 Development

### Run Tests
```bash
npm test
```

### Build for Production
```bash
npm run build
npm start
```

### Lint Code
```bash
npm run lint
```

## 📝 Environment Variables

Create a `.env.local` file:

```env
# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=pk_...

# API
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

# WebSocket
SOCKET_SERVER_URL=ws://localhost:4000

# External APIs
ACCOMMODATION_API_KEY=your_key
```

## 🎯 Features Roadmap

### Phase 1 - MVP ✅
- User authentication
- Trip creation and itinerary
- Story publishing and feed
- Hotel/restaurant search
- Attraction database

### Phase 2 - Collaboration
- Real-time editing
- Expense splitting
- Group chat
- Live bookings
- Notifications

### Phase 3 - Growth
- Buddy matching
- AI recommendations
- In-app booking
- Mobile apps
- Video previews

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 📞 Support

For support, email support@wandertogether.com or open an issue on GitHub.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities
- [Mapbox](https://www.mapbox.com/) for mapping services
- All contributors and travelers using Wander Together

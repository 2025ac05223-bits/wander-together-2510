# 🚀 Quick Start Guide - Wander Together

## Getting Started

### 1. Install Dependencies
```bash
cd wander-together
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages to Explore

### Home Page
- **URL**: `http://localhost:3000`
- **Features**: Hero search, featured trips & stories, quick links

### Trip Management
- **List Trips**: `http://localhost:3000/trips`
- **Create Trip**: `http://localhost:3000/trips/new`
- **View Trip**: `http://localhost:3000/trips/1` (click on any trip)

### Stories
- **Browse Stories**: `http://localhost:3000/stories`
- **Share Story**: `http://localhost:3000/stories/new`
- **Read Story**: `http://localhost:3000/stories/1` (click on any story)

### Search & Explore
- **Search**: `http://localhost:3000/search`
  - Hotels: Tab view with wishlist feature
  - Restaurants: Browse by cuisine
  - Attractions: Explore by type

### Hotel Details
- **View Hotel**: `http://localhost:3000/hotels/1` (from search results)

### Attraction Details
- **View Attraction**: `http://localhost:3000/attractions/1` (from search results)

### Authentication
- **Login**: `http://localhost:3000/auth/login`
- **Register**: `http://localhost:3000/auth/register`

## 🎨 Design Features

### Light Blue Theme
- Primary Blue: `#0ea5e9` (sky-500)
- Gradients used in hero sections and CTAs
- Clean white cards with subtle shadows
- Mobile-first responsive design

### Responsive Breakpoints
- Mobile: 0px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

### UI Components
- **Button**: Primary, Secondary, Outlined variants + sizes (sm, md, lg)
- **Card**: Consistent shadow and rounded corners
- **Badge**: Color-coded status badges
- **Input**: Consistent styling with focus states

## 📂 Key Directories

```
src/
├── app/              # Page routes (Next.js 14 App Router)
├── components/       # Reusable React components
│   ├── common/      # Navbar, HeroSearch
│   ├── ui/          # Button, Card, Input, Badge
│   ├── trips/       # TripCard component
│   ├── stories/     # StoryCard component
│   └── search/      # HotelCard, AttractionCard
├── lib/             # Utilities & mock data
├── store/           # Zustand state management
└── types/           # TypeScript interfaces
```

## 🔄 Data Management

### Mock Data
All data is currently mocked in `src/lib/mockData.ts`. The app includes:
- 2 sample trips
- 2 sample stories
- 2 sample hotels
- 2 sample restaurants
- 2 sample attractions

Replace with real API calls when backend is ready.

### State Management
- **UI State**: Zustand store (`src/store/useUIStore.ts`)
  - Search query
  - Active tabs
  - Wishlist/saved items

- **Server State**: TanStack Query ready (setup in layout)

## 🎯 Next Steps

### To Build Out Features:

1. **Setup Backend**
   - Create API endpoints
   - Setup database (PostgreSQL recommended)
   - Add authentication (JWT)

2. **Replace Mock Data**
   - Update components to use TanStack Query
   - Implement API calls
   - Add error handling

3. **Add Real-time Features**
   - Setup WebSocket server
   - Implement collaborative editing
   - Add notifications

4. **Testing**
   - Add Jest tests
   - Setup E2E tests with Playwright
   - Add component tests

5. **Deployment**
   - Setup Vercel/Netlify
   - Configure environment variables
   - Setup CI/CD pipeline

## 📝 TypeScript Types

Key types defined in `src/types/index.ts`:
- `User` - User profile
- `Trip` - Trip with metadata
- `Story` - Travel story with photos
- `Hotel`, `Restaurant`, `Attraction` - Place data
- `Expense` - Shared costs
- `Comment` - Story comments

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customizing Theme

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',  // Change primary color here
    600: '#0284c7',
    // ...
  }
}
```

## 💡 Tips

- Use the browser DevTools to inspect responsive design
- Mock data is pre-seeded, no database needed initially
- All components are typed with TypeScript
- Forms use React Hook Form + Zod validation
- Tailwind utility classes for styling (no CSS files needed)

## 📚 Documentation

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [TanStack Query](https://tanstack.com/query/v5)

## 🤔 Questions?

Refer to `README.md` for full documentation or check component files for inline comments.

Happy coding! 🎉

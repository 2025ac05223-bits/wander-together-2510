import { create } from 'zustand';

interface UIStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeSearchTab: 'trips' | 'stories' | 'hotels' | 'restaurants' | 'attractions';
  setActiveSearchTab: (tab: UIStore['activeSearchTab']) => void;
  wishlistHotels: string[];
  toggleWishlist: (hotelId: string) => void;
  savedStories: string[];
  toggleSavedStory: (storyId: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  activeSearchTab: 'trips',
  setActiveSearchTab: (tab) => set({ activeSearchTab: tab }),
  wishlistHotels: [],
  toggleWishlist: (hotelId) =>
    set((state) => ({
      wishlistHotels: state.wishlistHotels.includes(hotelId)
        ? state.wishlistHotels.filter((id) => id !== hotelId)
        : [...state.wishlistHotels, hotelId],
    })),
  savedStories: [],
  toggleSavedStory: (storyId) =>
    set((state) => ({
      savedStories: state.savedStories.includes(storyId)
        ? state.savedStories.filter((id) => id !== storyId)
        : [...state.savedStories, storyId],
    })),
}));

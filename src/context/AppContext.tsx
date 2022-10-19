import React, { createContext, useContext, useState } from 'react';
import data from 'lib/data.json';

type Listing = {
  id: number;
  name: string;
  host: string;
  rating: string;
  price: string;
  images: string[];
  dateFrom: string;
  dateTo: string;
  liked: boolean;
};

type Category = {
  id: number;
  category: string;
  image: string;
  data: Listing[];
};

type App = {
  likeListing: (categoryId: number, listingId: number) => void;
  listings: Category[];
};

const initialValue = {
  likeListing: (categoryId: number, listingId: number) => {},
  listings: data as Category[],
};

const AppContext = createContext<App>(initialValue);

const useApp = () => useContext(AppContext);

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [listings, setListings] = useState(initialValue.listings);

  const likeListing = (categoryId: number, listingId: number): void => {
    const listingsCopy = [...listings];
    const category = listingsCopy.find(
      (category) => category.id === categoryId
    );
    const listing = category?.data.find((listing) => listing.id === listingId);

    if (!listing) return;

    listing.liked = !listing.liked;
    setListings(listingsCopy);
  };

  const context = {
    likeListing,
    listings,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export { AppContextProvider, useApp };

export interface Store {
  placeId: string;
  name: string;
  formattedAddress: string;
  distanceFromCurrentLocation?: number;
  rating?: number;
  userRatingCount?: number;
  photos: string[];
  businessStatus?: string;
  priceLevel?: number;
  phoneNumber?: string;
  website?: string;
  hoursStatus: {
    isOpen: boolean;
    message: string;
    hoursUntilClose?: number;
    hoursUntilOpen?: number;
    nextCloseTime?: string;
    nextOpenTime?: string;
  };
  regularOpeningHours?: {
    weekdayDescriptions?: string[];
  };
  currentOpeningHours?: {
    openNow?: boolean;
    periods?: Array<{
      open: { day: number; hour: number; minute: number };
      close: { day: number; hour: number; minute: number };
    }>;
  };
}

// Generate placeholder image URLs with different colors for variety
const getPlaceholderImage = (index: number, storeName: string) => {
  const colors = [
    "FF6B6B", "4ECDC4", "45B7D1", "96CEB4", "FFEAA7",
    "DDA0DD", "FAA275", "9B59B6", "3498DB", "E67E22",
    "2ECC71", "E74C3C", "1ABC9C", "F39C12", "8E44AD"
  ];
  const color = colors[index % colors.length];
  return `https://via.placeholder.com/800x600/${color}/FFFFFF?text=${encodeURIComponent(storeName.slice(0, 15))}`;
};

export const dummyStores: Store[] = [
  {
    placeId: "store_1",
    name: "Whole Foods Market",
    formattedAddress: "123 Main Street, San Francisco, CA 94105",
    distanceFromCurrentLocation: 0.8,
    rating: 4.5,
    userRatingCount: 1247,
    photos: [
      getPlaceholderImage(0, "Whole Foods"),
      getPlaceholderImage(1, "Whole Foods Interior"),
      getPlaceholderImage(2, "Whole Foods Produce"),
      getPlaceholderImage(3, "Whole Foods Deli"),
      getPlaceholderImage(4, "Whole Foods Bakery"),
    ],
    businessStatus: "OPERATIONAL",
    priceLevel: 3,
    phoneNumber: "+1 (415) 555-0123",
    website: "https://www.wholefoodsmarket.com",
    hoursStatus: {
      isOpen: true,
      message: "Open now • Closes at 10:00 PM",
      hoursUntilClose: 4.5,
      nextCloseTime: new Date(Date.now() + 4.5 * 60 * 60 * 1000).toISOString(),
    },
    regularOpeningHours: {
      weekdayDescriptions: [
        "Monday: 7:00 AM - 10:00 PM",
        "Tuesday: 7:00 AM - 10:00 PM",
        "Wednesday: 7:00 AM - 10:00 PM",
        "Thursday: 7:00 AM - 10:00 PM",
        "Friday: 7:00 AM - 10:00 PM",
        "Saturday: 8:00 AM - 9:00 PM",
        "Sunday: 8:00 AM - 9:00 PM",
      ]
    },
    currentOpeningHours: {
      openNow: true,
    }
  },
  {
    placeId: "store_2",
    name: "Trader Joe's",
    formattedAddress: "456 Market Street, San Francisco, CA 94103",
    distanceFromCurrentLocation: 1.2,
    rating: 4.7,
    userRatingCount: 892,
    photos: [
      getPlaceholderImage(5, "Trader Joes"),
      getPlaceholderImage(6, "Trader Joes Aisle"),
      getPlaceholderImage(7, "Trader Joes Frozen"),
      getPlaceholderImage(8, "Trader Joes Wine"),
    ],
    businessStatus: "OPERATIONAL",
    priceLevel: 2,
    phoneNumber: "+1 (415) 555-0456",
    website: "https://www.traderjoes.com",
    hoursStatus: {
      isOpen: true,
      message: "Open now • Closes at 9:00 PM",
      hoursUntilClose: 3.5,
      nextCloseTime: new Date(Date.now() + 3.5 * 60 * 60 * 1000).toISOString(),
    },
    regularOpeningHours: {
      weekdayDescriptions: [
        "Monday: 8:00 AM - 9:00 PM",
        "Tuesday: 8:00 AM - 9:00 PM",
        "Wednesday: 8:00 AM - 9:00 PM",
        "Thursday: 8:00 AM - 9:00 PM",
        "Friday: 8:00 AM - 9:00 PM",
        "Saturday: 8:00 AM - 9:00 PM",
        "Sunday: 8:00 AM - 9:00 PM",
      ]
    },
    currentOpeningHours: {
      openNow: true,
    }
  },
  {
    placeId: "store_3",
    name: "Safeway",
    formattedAddress: "789 Mission Street, San Francisco, CA 94103",
    distanceFromCurrentLocation: 0.5,
    rating: 4.2,
    userRatingCount: 2341,
    photos: [
      getPlaceholderImage(9, "Safeway"),
      getPlaceholderImage(10, "Safeway Entrance"),
      getPlaceholderImage(11, "Safeway Aisle"),
      getPlaceholderImage(12, "Safeway Pharmacy"),
      getPlaceholderImage(13, "Safeway Deli"),
    ],
    businessStatus: "OPERATIONAL",
    priceLevel: 1,
    phoneNumber: "+1 (415) 555-0789",
    website: "https://www.safeway.com",
    hoursStatus: {
      isOpen: true,
      message: "Open 24 hours",
      hoursUntilClose: 16.5,
    },
    regularOpeningHours: {
      weekdayDescriptions: [
        "Monday: Open 24 hours",
        "Tuesday: Open 24 hours",
        "Wednesday: Open 24 hours",
        "Thursday: Open 24 hours",
        "Friday: Open 24 hours",
        "Saturday: Open 24 hours",
        "Sunday: Open 24 hours",
      ]
    },
    currentOpeningHours: {
      openNow: true,
    }
  },
  {
    placeId: "store_4",
    name: "Lucky Supermarket",
    formattedAddress: "321 Valencia Street, San Francisco, CA 94103",
    distanceFromCurrentLocation: 1.5,
    rating: 4.0,
    userRatingCount: 567,
    photos: [
      getPlaceholderImage(14, "Lucky"),
      getPlaceholderImage(0, "Lucky Produce"),
      getPlaceholderImage(1, "Lucky Meat"),
    ],
    businessStatus: "OPERATIONAL",
    priceLevel: 1,
    phoneNumber: "+1 (415) 555-1011",
    website: "https://www.luckysupermarkets.com",
    hoursStatus: {
      isOpen: false,
      message: "Closed • Opens at 6:00 AM",
      hoursUntilOpen: 2.5,
      nextOpenTime: new Date(Date.now() + 2.5 * 60 * 60 * 1000).toISOString(),
    },
    regularOpeningHours: {
      weekdayDescriptions: [
        "Monday: 6:00 AM - 11:00 PM",
        "Tuesday: 6:00 AM - 11:00 PM",
        "Wednesday: 6:00 AM - 11:00 PM",
        "Thursday: 6:00 AM - 11:00 PM",
        "Friday: 6:00 AM - 11:00 PM",
        "Saturday: 6:00 AM - 11:00 PM",
        "Sunday: 6:00 AM - 10:00 PM",
      ]
    },
    currentOpeningHours: {
      openNow: false,
    }
  },
  {
    placeId: "store_5",
    name: "Sprouts Farmers Market",
    formattedAddress: "567 Howard Street, San Francisco, CA 94105",
    distanceFromCurrentLocation: 2.0,
    rating: 4.6,
    userRatingCount: 734,
    photos: [
      getPlaceholderImage(2, "Sprouts"),
      getPlaceholderImage(3, "Sprouts Organic"),
      getPlaceholderImage(4, "Sprouts Bulk"),
      getPlaceholderImage(5, "Sprouts Bakery"),
    ],
    businessStatus: "OPERATIONAL",
    priceLevel: 2,
    phoneNumber: "+1 (415) 555-1213",
    website: "https://www.sprouts.com",
    hoursStatus: {
      isOpen: true,
      message: "Open now • Closes at 10:00 PM (closing soon)",
      hoursUntilClose: 0.75,
      nextCloseTime: new Date(Date.now() + 0.75 * 60 * 60 * 1000).toISOString(),
    },
    regularOpeningHours: {
      weekdayDescriptions: [
        "Monday: 7:00 AM - 10:00 PM",
        "Tuesday: 7:00 AM - 10:00 PM",
        "Wednesday: 7:00 AM - 10:00 PM",
        "Thursday: 7:00 AM - 10:00 PM",
        "Friday: 7:00 AM - 10:00 PM",
        "Saturday: 7:00 AM - 10:00 PM",
        "Sunday: 7:00 AM - 9:00 PM",
      ]
    },
    currentOpeningHours: {
      openNow: true,
    }
  }
];
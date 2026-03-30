//make a list of data types that we will be using in our application so that we can easily import them into our components and services
export interface ShoppingItem {
  id: string;
  name: string;
  quantity: string;
  estimatedPrice?: number;
  imageUrl?: string;
  category?: string;
  completed?: boolean;
}
type MealItem = {
  food: string;
  quantity: string;
};
export type MealPlan = {
  meal: "Breakfast" | "Lunch" | "Dinner";
  items: MealItem[];
};export type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};
export type ValidationState = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
};
export type GroceryItem = {
  food: string;
  store: string;
  price: string;
};
// Types and helper functions
export type FoodItem = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  quantity?: string;
};
export type Meal = {
  id: string;
  name: "breakfast" | "lunch" | "dinner";
  foods: FoodItem[];
};

export type places = {
    placeId: string;
    name: string;
    displayName?: string;
    latitude?: number;
    longitude?: number;
    types?: string[];
    formattedAddress?: string;
    businessStatus?: string;
    regularOpeningHours?: any;
    currentOpeningHours?: any;
    rating?: number;
    userRatingCount?: number;
    photos?: { url: string; width: number; height: number }[];
    photoCount?: number;
    priceLevel?: number;
    phoneNumber?: string;
    website?: string;
    hoursStatus?: {
        isOpen: boolean;
        message: string;
        hoursUntilClose?: number;
        hoursUntilOpen?: number;
        nextCloseTime?: string;
        nextOpenTime?: string;
    };
    distanceFromCurrentLocation?: number;
}

// placeId: place.id,
//                 name: place.displayName?.text || place.name,
//                 displayName: place.displayName,
//                 latitude: place.location?.latitude,
//                 longitude: place.location?.longitude,
//                 types: place.types,
//                 formattedAddress: place.formattedAddress,
//                 businessStatus: place.businessStatus,
//                 regularOpeningHours: place.regularOpeningHours,
//                 currentOpeningHours: place.currentOpeningHours,
//                 rating: place.rating,
//                 userRatingCount: place.userRatingCount,
//                 // Include the processed photos with URLs
//                 photos: photos,
//                 // Also include count of available photos
//                 photoCount: photos.length,
//                 priceLevel: place.priceLevel,
//                 phoneNumber: place.internationalPhoneNumber,
//                 website: place.websiteUri,
//                 // Computed hours status
//                 hoursStatus: {
//                     isOpen: hoursStatus.isOpen,
//                     message: hoursStatus.message,
//                     hoursUntilClose: hoursStatus.hoursUntilClose,
//                     hoursUntilOpen: hoursStatus.hoursUntilOpen,
//                     nextCloseTime: hoursStatus.nextCloseTime,
//                     nextOpenTime: hoursStatus.nextOpenTime
//                 },
//                 distanceFromCurrentLocation: distanceFromCurrentLocation
//             };


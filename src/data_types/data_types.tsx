//make a list of data types that we will be using in our application so that we can easily import them into our components and services
export interface ShoppingListItem {
  id: string;
  name: string;
  quantity: string;
  estimatedPrice?: number;
  imageUrl?: string;
  category?: string;
  completed?: boolean;
}

export type FormStateForFirstUserForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};
export type ValidationStateForFirstUserForm = {
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

export type MealPlan = {
  id: string;
  date: string; // ISO date string
  meals: Meal[];
};

export type place = {
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

export type places = place[];

export type FormStateForSecondUserForm = {
  password: string;
  confirmPassword: string;
};
export type ValidationStateForSecondUserForm = {
  password: boolean;
  confirmPassword: boolean;
};

export type FormStateForThirdProfileForm = {
  activityFactor: string;
  dietType: string;
  budgetLevel: string;
};
export type ValidationStateForThirdProfileForm = {
  activityFactor: boolean;
  dietType: boolean;
  budgetLevel: boolean;
};

export type FormStateForFourthProfileForm = {
  age: string;
  sex: string;
  weight: string;
  weightUnit: "lb" | "kg";
  height: string;
  heightUnit: "cm" | "in";
};
export type ValidationStateForFourthProfileForm = {
  age: boolean;
  sex: boolean;
  weight: boolean;
  height: boolean;
  weightUnit: boolean;
  heightUnit: boolean;
};

export type loginFormState = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type loginFormValidationState = {
  email: boolean;
  password: boolean;
};

export type registrationFormState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
};

export type updateProfileFormState = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
};

export type authenticationToken = {
  token: string;
  expiresIn: number;
}

export type locationAndRadiusFormState = {
  latitude: number;
  longitude: number;
  radius: number;
}

export type locationAndRadiusValidationState = {
  latitude: boolean;
  longitude: boolean;
  radius: boolean;
}

export type DietaryProfile = {
  age: number;
  sex: "male" | "female" | "other";
  weight: number;
  height: number;
  activityLevel: "sedentary" | "light" | "moderate" | "active" | "very active";
  dietaryPreferences: string[];
  budgetLevel: "low" | "normal" | "high";
}
export type ShoppingListItemProps = {
    id: string;
    name: string;
    quantity: string;
    estimatedPrice?: number;
    imageUrl?: string;
    category?: string;
    completed?: boolean;
    onToggleComplete?: (id: string, completed: boolean) => void;
    onUpdateQuantity?: (id: string, quantity: string) => void;
};export type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  isValid: boolean;
  type?: React.HTMLInputTypeAttribute;
  autoComplete?: string;
};


//This meal plan services will call the AI meal plan backend services to generate an object with the meal plans with images for breakfast, lunch, and dinner

import { MealPlan, MealPlanImages, MealPlanWithImages, DietaryProfile } from "../data_types/data_types";
const mealPlanURL = process.env.REACT_APP_AI_MEAL_PLAN_SERVICES_URL;
const mealPlanImageURL = process.env.REACT_APP_AI_MEAL_PLAN_SERVICES_IMAGE_URL;


if (!mealPlanImageURL) {
    throw new Error("REACT_APP_AI_MEAL_PLAN_SERVICES_IMAGE_URL is not defined");
}



//Service calls to API's and combines meal plan data with meal plan images data into one object to be used in the components
//first make helper subservice call to get meal plan data from user's DietaryProfile and then make another subservice call to get meal plan images data and combine them into one object to be used in the components
const getMealPlanDataFromDietaryProfile = async (dietaryProfile: DietaryProfile): Promise<MealPlan> => {
    if (mealPlanURL === undefined) {
        throw new Error("Meal plan URL is not defined");
    } else {
        try {
            const response = await fetch(mealPlanURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dietaryProfile),
            });
            //400 error means that the user's dietary profile is missing some required fields or has invalid values, so we can throw an error with a message that indicates what the problem is
            if (!response.ok) {
                if (response.status === 400) {
                    const errorData = await response.json();
                    throw new Error(`Error fetching meal plan data: ${errorData.message}`);
                } else if (response.status === 500) {
                    throw new Error(`Server error fetching meal plan data: ${response.statusText}`);
            } else {
                    throw new Error(`Error fetching meal plan data: ${response.statusText}`);
                }
            }
            const mealPlanData: MealPlan = await response.json();
            return mealPlanData;
        } catch (error) {
            console.error("Error in getMealPlanDataFromDietaryProfile:", error);
            throw error;
        }
    }
};

const getMealPlanImagesDataFromMealPlan = async (mealPlan: MealPlan): Promise<MealPlanImages> => {
    if (mealPlanImageURL === undefined) {
        throw new Error("Meal plan image URL is not defined");
    } else {
        try {
            const response = await fetch(mealPlanImageURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(mealPlan),
            });
            if (!response.ok) {
                throw new Error(`Error fetching meal plan images: ${response.statusText}`);
            }
            const mealPlanImagesData: MealPlanImages = await response.json();
            return mealPlanImagesData;
        } catch (error) {
            console.error("Error in getMealPlanImagesDataFromMealPlan:", error);
            throw error;
        }
    }
};

//now combine the two helper functions into one main function that will be called in the components to get the meal plan data with images
export const getMealPlanWithImagesFromDietaryProfile = async (dietaryProfile: DietaryProfile): Promise<MealPlanWithImages> => {
    try {
        const mealPlanData = await getMealPlanDataFromDietaryProfile(dietaryProfile);
        const mealPlanImagesData = await getMealPlanImagesDataFromMealPlan(mealPlanData);
        const mealPlanWithImages: MealPlanWithImages = {
            mealPlan: mealPlanData,
            mealPlanImages: mealPlanImagesData,
        };
        return mealPlanWithImages;
    } catch (error) {
        console.error("Error in getMealPlanWithImagesFromDietaryProfile:", error);
        throw error;
    }
};
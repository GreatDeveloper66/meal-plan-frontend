import { MealPlan, authenticationToken, MealPlanUpdatedResponse } from "../data_types/data_types";
const userMealPlanURL = process.env.REACT_APP_USER_MEAL_PLAN_SERVICES_URL;

if (!userMealPlanURL) {
    throw new Error("REACT_APP_USER_MEAL_PLAN_SERVICES_URL is not defined");
}

const getUserMealPlanURL = `${userMealPlanURL}/api/get-user-meal-plan`;
const createUserMealPlanURL = `${userMealPlanURL}/api/create-user-meal-plan`;
const updateUserMealPlanURL = `${userMealPlanURL}/api/update-user-meal-plan`;
const deleteUserMealPlanURL = `${userMealPlanURL}/api/delete-user-meal-plan`;

export const getUserMealPlan = async (authToken: authenticationToken): Promise<MealPlan> => {
    const response = await fetch(getUserMealPlanURL, {
        method: "GET",
        headers: { "Authorization": `Bearer ${authToken.token}` }
    });
    const mealPlanRaw =await response.json().catch((error) => {
        console.error("Error in getUserMealPlan:", error);
        throw error;
    })

    return mealPlanRaw.mealPlan;
}

export const createUserMealPlan = async (authToken: authenticationToken): Promise<MealPlan> => {
    const response = await fetch(createUserMealPlanURL, {
        method: "POST",
        headers: { "Authorization": `Bearer ${authToken.token}` }
    });
    const mealPlan = await response.json();
    return mealPlan.mealPlan;
}

export const updateUserMealPlan = async (mealPlan: MealPlan, authToken: authenticationToken): Promise<MealPlanUpdatedResponse> => {
    const response = await fetch(updateUserMealPlanURL, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken.token}`
        },
        body: JSON.stringify(mealPlan)
    });
    const mealPlanUpdated = await response.json();
    if(!mealPlanUpdated) {
        throw new Error("Error in updateUserMealPlan");
    } else if(!mealPlanUpdated.mealPlan) {
        throw new Error("Error in updateUserMealPlan. No meal plan returned");
    }
    return mealPlanUpdated.mealPlan;
}

export const deleteUserMealPlan = async (authToken: authenticationToken): Promise<any> => {
    const response = await fetch(deleteUserMealPlanURL, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${authToken.token}` }
    });
    return await response.json();
}
// {
//   "userId": "user_123",
//   "date": "2026-04-29T00:00:00.000Z",
//   "mealPlan": {
//     "id": "mealplan_001",
//     "date": "2026-04-29T00:00:00.000Z",
//     "meals": [
//       {
//         "id": "meal_001",
//         "name": "breakfast",
//         "foods": [
//           {
//             "id": "food_001",
//             "name": "Eggs",
//             "calories": 200,
//             "protein": 12,
//             "carbs": 2,
//             "fat": 15
//           }
//         ]
//       }
//     ]
//   }
// }
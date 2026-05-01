//import meal card and create a meal card list for breakfast, lunch, and dinner using the meal card component and dummy data of data type meal plan and meal from data types file then pass down each meal to the meal Card component and display them in a list on the page with the meal name as the title of each card and the meal image as the image for each card and the ingredients and macros as the content of each card and make sure to style the cards with dividing lines between each section and make sure to test the responsiveness of the cards on desktop and mobile devices

import MealCard from "../MealCard/MealCard";
import styles from "./MealCardList.module.css";
import { DietaryProfile } from "../../../data_types/data_types";
import { MealPlan, MealPlanImages, MealCardListProps, MealCardProps } from "../../../data_types/data_types";
import { useContext } from "react";
import { AppContext} from "../../../AppContext/AppContext";



// Dummy meal plan data
const dummyMealPlan: MealPlan = {
  id: "mealplan_001",
    date: "2024-06-01",
    meals: [
      {
        id: "meal_001",
        name: "breakfast",
        foods: [
          {
            id: "food_001",
            name: "Oatmeal",
            calories: 150,
            protein: 5,
            carbs: 27,
            fat: 3,
            quantity: "1 cup"
            },
            {
            id: "food_002",
            name: "Banana",
            calories: 90,
            protein: 1,
            carbs: 23,
            fat: 0,
            quantity: "1 medium"
            }
        ]
        },
        {
        id: "meal_002",
        name: "lunch",
        foods: [
            {
            id: "food_003",
            name: "Grilled Chicken",
            calories: 300,
            protein: 35,
            carbs: 0,
            fat: 7,
            quantity: "6 oz"
            },
            {
            id: "food_004",
            name: "Brown Rice",
            calories: 215,
            protein: 5,
            carbs: 45,
            fat: 2,
            quantity: "1 cup"
            }
        ]
        },
        {
        id: "meal_003",
        name: "dinner",
        foods: [
            {
            id: "food_005",
            name: "Salmon",
            calories: 250,
            protein: 30,
            carbs: 0,
            fat: 12,
            quantity: "5 oz"
            },
            {
            id: "food_006",
            name: "Steamed Broccoli",
            calories: 55,
            protein: 4,
            carbs: 11,
            fat: 0,
            quantity: "1 cup"
            }
        ]
        }
    ]
};

// const dummyMealPlanImages: MealPlanImages = {
//   MealPlanImagesUrls: [
//     { mealImageUrl: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-gom8UUy24hOiC5ynbEQILDj8/user-32kuWhWvVGWQQfIB7f6TMQwX/img-xqLLOAipuwrzw19F40rfQ28R.png?st=2026-04-14T18%3A12%3A04Z&se=2026-04-14T20%3A12%3A04Z&sp=r&sv=2026-02-06&sr=b&rscd=inline&rsct=image/png&skoid=ed3ea2f9-5e38-44be-9a1b-7c1e65e4d54f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-04-14T02%3A06%3A52Z&ske=2026-04-15T02%3A06%3A52Z&sks=b&skv=2026-02-06&sig=0hb%2BAM2BLMELXNypILxW4G8CHBZZSWw71AykSMI4UOc%3D" },
//     { mealImageUrl: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-gom8UUy24hOiC5ynbEQILDj8/user-32kuWhWvVGWQQfIB7f6TMQwX/img-htiX5OnR7Tj5PqXYmb3m5zow.png?st=2026-04-14T17%3A25%3A12Z&se=2026-04-14T19%3A25%3A12Z&sp=r&sv=2026-02-06&sr=b&rscd=inline&rsct=image/png&skoid=7daae675-7b42-4e2e-ab4c-8d8419a28d99&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-04-14T11%3A38%3A47Z&ske=2026-04-15T11%3A38%3A47Z&sks=b&skv=2026-02-06&sig=tUhaeWbeXXfdHybsawyC%2BW4BNFw%2B34/nHm2u4PEDR3Q%3D" },
//     { mealImageUrl: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-gom8UUy24hOiC5ynbEQILDj8/user-32kuWhWvVGWQQfIB7f6TMQwX/img-zc40WgkS37IpJPAqNYjRGtDe.png?st=2026-04-14T17%3A25%3A25Z&se=2026-04-14T19%3A25%3A25Z&sp=r&sv=2026-02-06&sr=b&rscd=inline&rsct=image/png&skoid=9346e9b9-5d29-4d37-a0a9-c6f95f09f79d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-04-14T00%3A07%3A31Z&ske=2026-04-15T00%3A07%3A31Z&sks=b&skv=2026-02-06&sig=juW7WJr/ooXs07swzco7QXGw7yKF83rpYe8zbGTRtjA%3D" }
//   ]
// };
const dummyMealPlanImages: MealPlanImages = {
    MealPlanImagesUrls: [
        { mealImageUrl: "../../../images/generic_breakfast.png" },
        { mealImageUrl: "../../../images/generic_lunch.png" },
        { mealImageUrl: "../../../images/generic_dinner.png" }
    ]
};
//create fallback images for each meal in case the meal image url is not available
const fallbackMealImages: string[] = [
  "../../../images/generic_breakfast.png",
  "../../../images/generic_lunch.png",
  "../../../images/generic_dinner.png"
];



const mealCardListData: MealCardListProps = {
  mealPlan: dummyMealPlan,
  mealPlanImages: dummyMealPlanImages
};

//create meal list function that takes meal card list props and returns a list of meal cards with the meal name as the title of each card and the meal image as the image for each card and the ingredients and macros as the content of each card and make sure to style the cards with dividing lines between each section and make sure to test the responsiveness of the cards on desktop and mobile devices
export default function MealCardList() {
    const appContext = useContext(AppContext);
    const dietaryProfile = appContext.dietaryProfile;
    appContext.createMealPlan(dietaryProfile);
    const { mealPlan, mealPlanImages } = mealCardListData;
    const combinedMealCardData: MealCardProps[] = mealPlan.meals.map((meal, index) => ({
        meal,
        mealImageUrl: mealPlanImages.MealPlanImagesUrls[index]?.mealImageUrl || fallbackMealImages[index] || "Image Not Available"
    }));
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>Meal Plan for {mealPlan.date}</h1>
                <div className={styles.cardList}>
                    {combinedMealCardData.map((mealCardProps) => (
                        <MealCard key={mealCardProps.meal.id} meal={mealCardProps.meal} mealImageUrl={mealCardProps.mealImageUrl} />
                    ))}
                </div>
            </div>
        </div>
    );
}


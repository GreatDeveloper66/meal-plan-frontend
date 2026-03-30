import { locationAndRadiusFormState } from "../data_types/data_types";
import dotenv from "dotenv";
dotenv.config();

// import grocery services url and create urls for get grocery stores
const API_BASE_URL =  process.env.GROCERY_SERVICES_URL
const GET_GROCERY_STORES_URL = `${API_BASE_URL}/find-grocery-markets-within-radius`;

// Function to get grocery stores within a radius
export async function getGroceryStores(locationData: locationAndRadiusFormState): Promise<any> {
  try {
    const response = await fetch(GET_GROCERY_STORES_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
        body: JSON.stringify(locationData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching grocery stores:", error);
    throw error;
  }
}
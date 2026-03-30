//create a file of diet profile services to handle all the api calls related to diet profile
// including
import { dietaryProfile, authenticationToken } from "../data_types/data_types";
import dotenv from "dotenv";
dotenv.config();


// import diet profile services url and create urls for get, create, update and delete diet profile
const API_BASE_URL =  process.env.DIET_PROFILE_SERVICES_URL
const CREATE_DIET_PROFILE_URL = `${API_BASE_URL}/create-nutritional-profile`;
const GET_DIET_PROFILE_URL = `${API_BASE_URL}/get-nutritional-profile`;
const UPDATE_DIET_PROFILE_URL = `${API_BASE_URL}/update-nutritional-profile`;
const DELETE_DIET_PROFILE_URL = `${API_BASE_URL}/delete-nutritional-profile`;

// Function to create a new diet profile
export async function createDietProfile(profileData: dietaryProfile, authToken: authenticationToken) {
  try {
    const response = await fetch(CREATE_DIET_PROFILE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken.token}`
      },
        body: JSON.stringify(profileData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error creating diet profile:", error);
    throw error;
  }
}

// Function to get a diet profile
export async function getDietProfile(authToken: authenticationToken) {
  try {
    const response = await fetch(GET_DIET_PROFILE_URL, {
      method: "GET",
      headers: { "Authorization": `Bearer ${authToken.token}` }
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching diet profile:", error);
    throw error;
  }
}

// Function to update a diet profile
export async function updateDietProfile(profileData: dietaryProfile, authToken: authenticationToken) {
  try {
    const response = await fetch(UPDATE_DIET_PROFILE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken.token}`
      },
        body: JSON.stringify(profileData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error updating diet profile:", error);
    throw error;
  }
}

// Function to delete a diet profile
export async function deleteDietProfile(authToken: authenticationToken) {
  try {
    const response = await fetch(DELETE_DIET_PROFILE_URL, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${authToken.token}` }
    });
    return await response.json();
  } catch (error) {
    console.error("Error deleting diet profile:", error);
    throw error;
  }
}
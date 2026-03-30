//Create a series of functions that will be used to connect to the backend and perform CRUD operations on the user data
//This will include functions for registering a new user, loggin in, logging out, logging out, updating user and deleting user
import { registrationFormState, loginFormState, updateProfileFormState, authenticationToken } from "../data_types/data_types";
import dotenv from "dotenv";
dotenv.config();


// import user services url and create urls for register, login, logout, update and delete
const API_BASE_URL =  process.env.USER_SERVICES_URL
const REGISTER_URL = `${API_BASE_URL}/register`;
const LOGIN_URL = `${API_BASE_URL}/login`;
const LOGOUT_URL = `${API_BASE_URL}/logout`;
const UPDATE_URL = `${API_BASE_URL}/update-profile`;
const DELETE_URL = `${API_BASE_URL}/delete-user`;


// Function to register a new user
export async function registerUser(userData: registrationFormState) {
  try {
    const response = await fetch(REGISTER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

// Function to log in a user
export async function loginUser(credentials: loginFormState) {
  try {
    const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
}

// Function to log out a user
export async function logoutUser(authToken: authenticationToken) {
  try {
    const response = await fetch(LOGOUT_URL, {
      method: "POST",
      headers: { "Authorization": `Bearer ${authToken.token}` }
    });
    return await response.json();
  } catch (error) {
    console.error("Error logging out user:", error);
    throw error;
  }
}

// Function to update user profile
export async function updateUserProfile(userData: updateProfileFormState, authToken: authenticationToken) {
  try {
    const response = await fetch(UPDATE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken.token}`
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
}

// Function to delete a user
export async function deleteUser(authToken: authenticationToken) {  try {
    const response = await fetch(DELETE_URL, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${authToken.token}` }
    });
    return await response.json();
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}
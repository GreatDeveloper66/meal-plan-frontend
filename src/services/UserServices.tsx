//Create a series of functions that will be used to connect to the backend and perform CRUD operations on the user data
//This will include functions for registering a new user, loggin in, logging out, logging out, updating user and deleting user
import { registrationFormState, loginFormState, updateProfileFormState, authenticationToken } from "../data_types/data_types";


// import user services url and create urls for register, login, logout, update and delete
const API_BASE_URL =  process.env.REACT_APP_USER_SERVICES_URL
const REGISTER_URL = `${API_BASE_URL}/register`;
const LOGIN_URL = `${API_BASE_URL}/login`;
const LOGOUT_URL = `${API_BASE_URL}/logout`;
const UPDATE_URL = `${API_BASE_URL}/update-profile`;
const DELETE_URL = `${API_BASE_URL}/delete-user`;


// Function to register a new user
export async function registerUser(userData: registrationFormState): Promise<any> {
  try {
    const response = await fetch(REGISTER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    const token = data.token; // Assuming the token is returned in the response
    localStorage.setItem("authToken", token); // Store the token in local storage
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

// Function to log in a user
export async function loginUser(credentials: loginFormState): Promise<any> {
  try {
    const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });
    // when data is returned, store the token in local storage
    const data = await response.json();
    const token = data.token;
    localStorage.setItem("authToken", token);
    return data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
}

// Function to log out a user
export async function logoutUser(authToken: authenticationToken): Promise<any> {
  try {
    const response = await fetch(LOGOUT_URL, {
      method: "POST",
      headers: { "Authorization": `Bearer ${authToken.token}` }
    });
    const data = await response.json();
    localStorage.removeItem("authToken"); // Remove the token from local storage
    return data;
  } catch (error) {
    console.error("Error logging out user:", error);
    throw error;
  }
}

// Function to update user profile
export async function updateUserProfile(userData: updateProfileFormState, authToken: authenticationToken): Promise<any> {
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
export async function deleteUser(authToken: authenticationToken): Promise<any> {
  try {
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

//get user data function that takes in an auth token and returns the user data
export async function getUserData(authToken: authenticationToken): Promise<any> {
  try {    const response = await fetch(`${API_BASE_URL}/user-data`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${authToken.token}` }
    });
    return await response.json();
  } catch (error) {
    console.error("Error getting user data:", error);
    throw error;
  }
}
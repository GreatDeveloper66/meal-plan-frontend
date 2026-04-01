import { createContext } from "react";
import {
getGroceryStores
} from "../services/GroceryServices";

import {
  registerUser,
  loginUser,
  updateUserProfile,
  getUserData,
  deleteUser,
} from "../services/UserServices";
import {
  createDietProfile,
  getDietProfile,
  updateDietProfile,
  deleteDietProfile,
} from "../services/DietProfileServices";
import {
  FormStateForFirstUserForm,
  FormStateForSecondUserForm,
  FormStateForThirdProfileForm,
  FormStateForFourthProfileForm,
  loginFormState,
  registrationFormState,
  updateProfileFormState,
  authenticationToken,
  locationAndRadiusFormState,
  DietaryProfile,
  places
} from "../data_types/data_types";

export const AppContext = createContext({
  firstUserFormState: {} as FormStateForFirstUserForm,
  secondUserFormState: {} as FormStateForSecondUserForm,
  thirdProfileFormState: {} as FormStateForThirdProfileForm,
  fourthProfileFormState: {} as FormStateForFourthProfileForm,
  loginFormState: {} as loginFormState,
  updateProfileFormState: {} as updateProfileFormState,
  authenticationToken: {} as authenticationToken,
  locationAndRadiusFormState: {} as locationAndRadiusFormState,
  places: [] as places[],
  setFirstUserFormState: (data: FormStateForFirstUserForm) => {
    (AppContext as any).firstUserFormState = data;
  },
  setSecondUserFormState: (data: FormStateForSecondUserForm) => {
    (AppContext as any).secondUserFormState = data;
  },
  setThirdProfileFormState: (data: FormStateForThirdProfileForm) => {
    (AppContext as any).thirdProfileFormState = data;
  },
  setFourthProfileFormState: (data: FormStateForFourthProfileForm) => {
    (AppContext as any).fourthProfileFormState = data;
  },
  setLoginFormState: (data: loginFormState) => {
    (AppContext as any).loginFormState = data;
  },
  registerUser: async () => {
    //take data from firstUserFormState and secondUserFormState and combine them to create a registrationFormState object, then call registerUser from UserServices with that data
    const registrationData: registrationFormState = {
      firstName: (AppContext as any).firstUserFormState.firstName,
      lastName: (AppContext as any).firstUserFormState.lastName,
      email: (AppContext as any).firstUserFormState.email,
      phone: (AppContext as any).firstUserFormState.phone,
      password: (AppContext as any).secondUserFormState.password,
    };
    // take registrationData and call registerUser from UserServices
    const data = registerUser(registrationData);
    if (localStorage.getItem("authToken")) {
      (AppContext as any).authenticationToken = {
        token: localStorage.getItem("authToken") || "",
      };
    }
    return data;
  },
  loginUser: async () => {
    const data = await loginUser((AppContext as any).loginFormState);
    //store token in context
    if (localStorage.getItem("authToken")) {
      (AppContext as any).authenticationToken = {
        token: localStorage.getItem("authToken") || "",
      };
    }
    return data;
  },
  logoutUser: () => {
    (AppContext as any).authenticationToken = {} as authenticationToken;
    localStorage.removeItem("authToken");
  },
  updateUser: async () => {
    const data = await updateUserProfile(
      (AppContext as any).updateProfileFormState,
      (AppContext as any).authenticationToken.token,
    );
    //if update is successful, update the context with the new user data (e.g. first name, last name, email, phone)
    if (data) {
      (AppContext as any).firstUserFormState = { ...data };
    }
    return data;
  },
  getUser: async () => {
    const data = await getUserData(
      (AppContext as any).authenticationToken.token,
    );
    //update context with user data
    if (data) {
      (AppContext as any).firstUserFormState = { ...data };
    }
    return data;
  },
  deleteUser: async () => {
    const data = await deleteUser(
      (AppContext as any).authenticationToken.token,
    );
    //if delete is successful, clear the context and local storage
    if (data) {
      (AppContext as any).firstUserFormState = {} as FormStateForFirstUserForm;
      (AppContext as any).secondUserFormState =
        {} as FormStateForSecondUserForm;
      (AppContext as any).thirdProfileFormState =
        {} as FormStateForThirdProfileForm;
      (AppContext as any).fourthProfileFormState =
        {} as FormStateForFourthProfileForm;
      (AppContext as any).loginFormState = {} as loginFormState;
      (AppContext as any).updateProfileFormState = {} as updateProfileFormState;
      (AppContext as any).authenticationToken = {} as authenticationToken;
      localStorage.removeItem("authToken");
    }
    return data;
  },
    //use create diet profile from DietProfileServices and pass in dietaryProfile from context and authenticationToken from context
  createDietProfile: async () => {
    //take thirdProfileFormState and fourthProfileFormState from context and combine them to create a dietaryProfile object, then pass that and the authentication token to createDietProfile from DietProfileServices
    const weightUnit = (AppContext as any).fourthProfileFormState.weightUnit;
    const heightUnit = (AppContext as any).fourthProfileFormState.heightUnit;
    let localWeight = 0;
    let localHeight = 0;

    if (weightUnit === "lb") {
      localWeight = (Number((AppContext as any).fourthProfileFormState.weight) * 0.453592);
    }
    if (heightUnit === "in") {
      localHeight = (Number((AppContext as any).fourthProfileFormState.height) * 2.54);
    }

    const dietProfileData: DietaryProfile = {
      age: Number((AppContext as any).fourthProfileFormState.age),
      sex: (AppContext as any).fourthProfileFormState.sex,
      weight: localWeight,
      height: Number(localHeight),
      activityLevel: (AppContext as any).thirdProfileFormState.activityFactor,
      dietaryPreferences: (AppContext as any).thirdProfileFormState.dietType,
      budgetLevel: (AppContext as any).thirdProfileFormState.budgetLevel
    };
    const data = await createDietProfile(
      dietProfileData,
      (AppContext as any).authenticationToken.token,
    );
    return data;
  },
  getDietProfile: async () => {
    const data = await getDietProfile(
        (AppContext as any).authenticationToken.token,
    );
    //update context with diet profile data
    if (data) {
      (AppContext as any).dietaryProfile = { ...data };
    }
    return data;
  },
  updateDietProfile: async () => {
    const data = await updateDietProfile(
        (AppContext as any).dietaryProfile,
        (AppContext as any).authenticationToken.token,
    );
    //update context with updated diet profile data
    if (data) {
      (AppContext as any).dietaryProfile = { ...data };
    }
    return data;
  },
  deleteDietProfile: async () => {
    const data = await deleteDietProfile(
        (AppContext as any).authenticationToken.token,
    );
    //if delete is successful, clear the dietary profile from context
    if (data) {
      (AppContext as any).dietaryProfile = {} as DietaryProfile;
    }
    return data;
  },
    getGroceryStores: async () => {
        const data = await getGroceryStores(
            (AppContext as any).locationAndRadiusFormState,
        );
        //update context with grocery store data
        if (data) {
            (AppContext as any).places = [...data];
        }
        return data;
    }
});

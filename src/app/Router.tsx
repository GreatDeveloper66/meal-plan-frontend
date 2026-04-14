import { Routes, Route } from "react-router-dom";
import OpeningScreenPage from "../pages/OpeningScreen/OpeningScreenPage";
import FirstProfileSetupPage from "../pages/FirstProfileSetup/FirstProfileSetupPage";
import SecondProfileSetupPage from "../pages/SecondProfileSetup/SecondProfileSetupPage";
import ThirdProfileSetupPage from "../pages/ThirdProfileSetup/ThirdProfileSetupPage";
import FourthProfileSetupPage from "../pages/FourthProfileSetupPage/FourthProfileSetupPage";
import HubPage from "../pages/Hub/HubPage";
import LoginScreenPage from "../pages/LoginScreen/LoginScreenPage";
import ForgotPasswordPage from "../pages/ForgotPassword/ForgotPasswordPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import FirstEditPage from "../pages/FirstEditPage/FirstEditPage";
import SecondEditPage from "../pages/SecondEditPage/SecondEditPage";
import GroceriesPage from "../pages/Groceries/GroceriesPage";
import InfoPage from "../pages/Info/InfoPage";
import WelcomeCarousel from "../pages/WelcomeCarousel/WelcomeCarousel";
import MealCarousel from "../pages/MealCarousel/MealCarousel";
// import ShoppingList from "../pages/ShoppingList/ShoppingList";
import TestPhotoCarousel from "../pages/TestPhotoCarousel/TestPhotoCarousel";
import TestMealCard from "../components/ui/TestMealCard/TestMealCard";



export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<OpeningScreenPage />} />
      <Route path="/first-profile-setup" element={<FirstProfileSetupPage />} />
      <Route
        path="/second-profile-setup"
        element={<SecondProfileSetupPage />}
      />
      <Route path="/third-profile-setup" element={<ThirdProfileSetupPage />} />
      <Route
        path="/fourth-profile-setup"
        element={<FourthProfileSetupPage />}
      />
      <Route path="/hub" element={<HubPage />} />
      <Route path="/login" element={<LoginScreenPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/first-edit-page" element={<FirstEditPage />} />
      <Route path="/second-edit-page" element={<SecondEditPage />} />
      <Route path="/groceries" element={<GroceriesPage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/welcome-carousel" element={<WelcomeCarousel />} />
      <Route path="/meal-carousel" element={<MealCarousel />} />
      <Route path="/test-photo-carousel" element={<TestPhotoCarousel />} />
      <Route path="/test-meal-card" element={<TestMealCard />} />
      <Route path="*" element={<div>404 Not Found</div>} />


      {/* Add remaining routes incrementally */}
    </Routes>
  );
};

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

      {/* Add remaining routes incrementally */}
    </Routes>
  );
};

import { Routes, Route } from "react-router-dom";
import OpeningScreenPage from "../pages/OpeningScreen/OpeningScreenPage";
import FirstProfileSetupPage from "../pages/FirstProfileSetup/FirstProfileSetupPage";
import SecondProfileSetupPage from "../pages/SecondProfileSetup/SecondProfileSetupPage";
import ThirdProfileSetupPage from "../pages/ThirdProfileSetup/ThirdProfileSetupPage";
import FourthProfileSetupPage from "../pages/FourthProfileSetupPage/FourthProfileSetupPage";  

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
      {/* Add remaining routes incrementally */}
    </Routes>
  );
};

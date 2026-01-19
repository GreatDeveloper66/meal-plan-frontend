import { Routes, Route } from "react-router-dom";
import OpeningScreenPage from "../pages/OpeningScreen/OpeningScreenPage";
import FirstProfileSetupPage from "../pages/FirstProfileSetup/FirstProfileSetupPage";
import SecondProfileSetupPage from "../pages/SecondProfileSetupPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<OpeningScreenPage />} />
      <Route path="/first-profile-setup" element={<FirstProfileSetupPage />} />
      <Route
        path="/second-profile-setup"
        element={<SecondProfileSetupPage />}
      />
      {/* Add remaining routes incrementally */}
    </Routes>
  );
};

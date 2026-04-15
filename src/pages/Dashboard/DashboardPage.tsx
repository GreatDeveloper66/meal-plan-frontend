//create dashboard page with meal plan table and navigation footer to navigate to hub and groceries page
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import styles from "./DashboardPage.module.css";
import MealCardList from "../../components/ui/MealCardList/MealCardList";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (<div className={styles.dashboardPage}>
    <div className="styles.header">
      <h1 className="styles.title">Dashboard</h1>
    </div>
    <MealCardList />
    <NavigationFooter
      onBack={() => navigate("/hub")}
      onNext={() => navigate("/groceries")}
    />
  </div>);
}

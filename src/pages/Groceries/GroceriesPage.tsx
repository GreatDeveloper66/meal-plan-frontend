import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import styles from "./GroceriesPage.module.css";

type GroceryItem = {
  food: string;
  store: string;
  price: string;
};

export default function GroceriesPage() {
  const navigate = useNavigate();
  const [groceries, setGroceries] = useState<GroceryItem[]>([]);

  useEffect(() => {
    // 🔹 Placeholder: fetch grocery list from backend
    const fetchGroceries = async () => {
      const dummyData: GroceryItem[] = [
        { food: "Oatmeal", store: "Target", price: "$3.99" },
        { food: "Bananas", store: "Walmart", price: "$1.29" },
        { food: "Chicken Breast", store: "Costco", price: "$9.99" },
        { food: "Salmon", store: "Trader Joe’s", price: "$12.99" },
        { food: "Broccoli", store: "Aldi", price: "$2.49" },
      ];

      setGroceries(dummyData);
    };

    fetchGroceries();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Card>
        <h1 className={styles.title}>Groceries</h1>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Food</th>
                <th>Store</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {groceries.map((item, index) => (
                <tr key={index}>
                  <td>{item.food}</td>
                  <td>{item.store}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <NavigationFooter
          onBack={() => navigate("/dashboard")}
          onNext={() => navigate("/hub")}
        />
      </Card>
    </div>
  );
}

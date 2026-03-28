import { useState } from "react";
import styles from "./ShoppingList.module.css";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";
import Badge from "../Badge/Badge";

type ShoppingItem = {
  completed: any;
  id: string;
  name: string;
  quantity: string;
  estimatedPrice?: number;
  imageUrl?: string;
  category?: string;
};

type ShoppingListProps = {
  items: ShoppingItem[];
  onToggleItem?: (id: string, completed: boolean) => void;
  onUpdateQuantity?: (id: string, quantity: string) => void;
  storeName?: string;
};

export default function ShoppingList({
  items,
  onToggleItem,
  onUpdateQuantity,
  storeName,
}: ShoppingListProps) {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) => {
    // Filter by completion status
    const matchesFilter =
      filter === "all" ? true :
      filter === "active" ? !item.completed :
      filter === "completed" ? item.completed : true;
    // Filter by search term
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalItems = items.length;
  const completedItems = items.filter(item => item.completed).length;
  const totalEstimatedCost = items.reduce(
    (sum, item) => sum + (item.estimatedPrice || 0),
    0
  );

  return (
    <div className={styles.shoppingList}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Shopping List
          {storeName && <span className={styles.storeName}>for {storeName}</span>}
        </h2>
        <div className={styles.stats}>
          <Badge variant="neutral">
            {completedItems}/{totalItems} items
          </Badge>
          <Badge variant="info">
            ≈ ${totalEstimatedCost.toFixed(2)}
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterButton} ${filter === "all" ? styles.active : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`${styles.filterButton} ${filter === "active" ? styles.active : ""}`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={`${styles.filterButton} ${filter === "completed" ? styles.active : ""}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      {/* Items List */}
      <div className={styles.itemsList}>
        {filteredItems.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No items found</p>
            {searchTerm && <p>Try adjusting your search</p>}
          </div>
        ) : (
          filteredItems.map((item) => (
            <ShoppingListItem
              key={item.id}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              estimatedPrice={item.estimatedPrice}
              imageUrl={item.imageUrl}
              category={item.category}
              onToggleComplete={onToggleItem}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))
        )}
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <button className={styles.printButton} onClick={() => window.print()}>
          🖨️ Print List
        </button>
      </div>
    </div>
  );
}
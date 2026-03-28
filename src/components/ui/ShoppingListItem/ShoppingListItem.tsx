import { useState } from "react";
import styles from "./ShoppingListItem.module.css";

type ShoppingListItemProps = {
    id: string;
    name: string;
    quantity: string;
    estimatedPrice?: number;
    imageUrl?: string;
    category?: string;
    completed?: boolean;
    onToggleComplete?: (id: string, completed: boolean) => void;
    onUpdateQuantity?: (id: string, quantity: string) => void;
};

export default function ShoppingListItem({
    id,
    name,
    quantity,
    estimatedPrice,
    imageUrl,
    category,
    completed = false,
    onToggleComplete,
    onUpdateQuantity,
}: ShoppingListItemProps) {
    const [isCompleted, setIsCompleted] = useState(completed);
    const [isEditingQuantity, setIsEditingQuantity] = useState(false);
    const [editedQuantity, setEditedQuantity] = useState(quantity);

    const handleToggle = () => {
        const newState = !isCompleted;
        setIsCompleted(newState);
        onToggleComplete?.(id, newState);
    };

    const handleQuantityUpdate = () => {
        setIsEditingQuantity(false);
        if (editedQuantity !== quantity && editedQuantity.trim() !== "") {
            onUpdateQuantity?.(id, editedQuantity);
        } else {
            setEditedQuantity(quantity);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleQuantityUpdate();
        }
        if (e.key === "Escape") {
            setIsEditingQuantity(false);
            setEditedQuantity(quantity);
        }
    };

    return (
        <div className={`${styles.item} ${isCompleted ? styles.completed : ""}`}>
            <div className={styles.checkbox}>
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={handleToggle}
                    aria-label={`Mark ${name} as ${isCompleted ? "incomplete" : "complete"}`}
                />
            </div>

            {imageUrl && (
                <div className={styles.itemImage}>
                    <img src={imageUrl} alt={name} loading="lazy" />
                </div>
            )}

            <div className={styles.itemInfo}>
                <div className={styles.itemName}>
                    {name}
                    {category && <span className={styles.category}>{category}</span>}
                </div>
                <div className={styles.itemDetails}>
                    {isEditingQuantity ? (
                        <input
                            title="Edit quantity"
                            placeholder="Quantity"
                            type="text"
                            value={editedQuantity}
                            onChange={(e) => setEditedQuantity(e.target.value)}
                            onBlur={handleQuantityUpdate}
                            onKeyDown={handleKeyPress}
                            className={styles.quantityInput}
                            autoFocus
                        />
                    ) : (
                        <button
                            className={styles.quantity}
                            onClick={() => setIsEditingQuantity(true)}
                            aria-label={`Edit quantity for ${name}`}
                        >
                            {quantity}
                        </button>
                    )}
                    {estimatedPrice && (
                        <span className={styles.price}>≈ ${estimatedPrice.toFixed(2)}</span>
                    )}
                </div>
            </div>
        </div>
    );
}
"use client";
import React, { useState } from "react";

interface AddexpenseProps {
    isopen : boolean;
    onclose : () => void;
}
const items = ["Food", "Transport", "Utilities", "Entertainment", "Healthcare", "Other"];
const Addexpense: React.FC<AddexpenseProps> = ({isopen,onclose}) => {
    if(!isopen){ return null;}
// ...existing code...
    const predefined = items;
    const [amount, setAmount] = useState<number | "">("");
    const [error, setError] = useState<string | null>(null);
    const [categories, setCategories] = useState<string[]>(predefined);
    const [category, setCategory] = useState<string>(predefined[0]);
    const [addingNew, setAddingNew] = useState(false);
    const [newCategory, setNewCategory] = useState("");
    const [inputMode, setInputMode] = useState<"text" | "voice">("text");

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        if (v === "") {
            setAmount("");
            setError(null);
            return;
        }
        const n = Number(v);
        if (Number.isNaN(n)) return;
        if (n < 0) {
            setError("Amount cannot be negative");
            setAmount(0);
            return;
        }
        setError(null);
        setAmount(n);
    };

    const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        if (val === "__add_new__") {
            setAddingNew(true);
            setCategory("");
            setNewCategory("");
            setError(null);
        } else {
            setAddingNew(false);
            setCategory(val);
            setNewCategory("");
            setError(null);
        }
    };

    const handleAddNewCategory = () => {
        const trimmed = newCategory.trim();
        if (!trimmed) {
            setError("Category name cannot be empty");
            return;
        }
        if (categories.includes(trimmed)) {
            setError("Category already exists");
            return;
        }
        const updated = [...categories, trimmed];
        setCategories(updated);
        setCategory(trimmed);
        setAddingNew(false);
        setNewCategory("");
        setError(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (amount === "" || amount === null) {
            setError("Please enter an amount");
            return;
        }
        if (typeof amount === "number" && amount < 0) {
            setError("Amount cannot be negative");
            return;
        }
        const chosenCategory = addingNew ? newCategory.trim() : category;
        if (!chosenCategory) {
            setError("Please choose or add a category");
            return;
        }

        const expense = {
            amount: amount as number,
            category: chosenCategory,
            inputMode,
            date: new Date().toISOString(),
        };
        console.log("Saved expense:", expense);
        setAmount("");
        setCategory(categories[0] ?? "");
        setAddingNew(false);
        setNewCategory("");
        setError(null);
        onclose();
    };
return (
    <div className="popup-base">
        <div className="popup-content">
            {/* Toggle bar at top */}
            <div className="toggle-bar" role="tablist" aria-label="Input mode">
                <button
                    type="button"
                    className={`toggle-btn ${inputMode === "text" ? "active" : ""}`}
                    onClick={() => setInputMode("text")}
                    role="tab"
                    aria-selected={inputMode === "text"}
                >
                    Text Input
                </button>
                <button
                    type="button"
                    className={`toggle-btn ${inputMode === "voice" ? "active" : ""}`}
                    onClick={() => setInputMode("voice")}
                    role="tab"
                    aria-selected={inputMode === "voice"}
                >
                    Voice Input
                </button>
            </div>

            <button className="close-btn" onClick={onclose}>
                &times;
            </button>
            <h3>Add Expense</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={amount === "" ? "" : String(amount)}
                        onChange={handleAmountChange}
                        min={0}
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category</label>

                    {!addingNew ? (
                        <select id="category" name="category" value={category} onChange={handleCategorySelect}>
                            {categories.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                            <option value="__add_new__">+ Add new category...</option>
                        </select>
                    ) : (
                        <div className="add-new-row">
                            <input
                                type="text"
                                id="new-category"
                                name="new-category"
                                placeholder="New category name"
                                value={newCategory}
                                onChange={(e) => {
                                    setNewCategory(e.target.value);
                                    setError(null);
                                }}
                            />
                            <button type="button" onClick={handleAddNewCategory} className="small-btn">
                                Add
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setAddingNew(false);
                                    setNewCategory("");
                                    setCategory(categories[0] ?? "");
                                    setError(null);
                                }}
                                className="small-btn alt"
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>

                {error && <div className="error" role="alert">{error}</div>}

                <button type="submit" className="popup-btn">SAVE</button>
            </form>
            <div className="mode-info">
                <div>{inputMode === "text" ? "Text" : "Voice"}</div>
                <div>Input</div>
            </div>
        </div>
    </div>
);

};
export default Addexpense;
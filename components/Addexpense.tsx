"use client";
import { ExpenseCardType } from "@/types";
import React, { useState } from "react";

interface AddexpenseProps {
    isopen : boolean;
    onclose : () => void;
    onSave : (expense: ExpenseCardType) => void;
}
const items = ["Food", "Transport", "Utilities", "Entertainment", "Healthcare", "Other"];
const Addexpense: React.FC<AddexpenseProps> = ({isopen,onclose,onSave}) => {
    if(!isopen){ return null;}

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
        if(inputMode == "voice"){
            if(!voicetext.trim()){
                setError("Unable to capture voice!");
                return;}

        const amountmatch = voicetext.match(/\d+(\.\d+)?/);
        const foundcategory = categories.find(c=>
            voicetext.toLowerCase().includes(c.toLowerCase())
        );
        if(!amountmatch){setError("Unable to detect amount from you speech Try again "); return;}
        
        const voiceamount = parseFloat(amountmatch[0]);
        if (isNaN(voiceamount) || voiceamount < 0) {
        setError("Invalid amount detected");
        return;
    }
        const post:ExpenseCardType  = {
            _id: Date.now(),
            _createdAT: new Date().toLocaleDateString("ban", {
                month: "long",
                day: "numeric",
                year: "numeric"
            }),
            title: `Voice Expense - ${foundcategory || "Other"}`,
            amount: voiceamount,
            category: foundcategory || "Other",
            description: voicetext,
            date: new Date().toISOString()}
        console.log("Saved Expense");
        setvoicetext("");
        onSave(post);
        onclose();
        return;
        }
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
        const post:ExpenseCardType  = {
            _id: Date.now(),
            _createdAT: new Date().toLocaleDateString("ban", {
                month: "long",
                day: "numeric",
                year: "numeric"
            }),
            title: `Expense - ${chosenCategory || "Other"}`,
            amount: amount as number,
            category: chosenCategory || "Other",
            description: voicetext,
            date: new Date().toISOString()}
        setAmount("");
        setCategory(categories[0] ?? "");
        setAddingNew(false);
        setNewCategory("");
        setError(null);
        onSave(post);
        onclose();
        return;
    };
        // --------------------Voice Mode Setup-----------------------
    const [listening,setlistening]  = useState(false);
    const [voicetext,setvoicetext]  = useState<string>("");

    const handlevoiceinput = () =>{
        const SpeechRecognition =(window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if(!SpeechRecognition){
            setError("Voice input not supported for thi browser");
            return ;
        }
        try {
        const recognition = new SpeechRecognition();
        recognition.lang  = "en-US";
        recognition.interimResults  =false;
        recognition.maxAlters = 1;

        setlistening(true);
        recognition.start();
        recognition.onresult = (event: any) =>{
            const transcript =  event.results[0][0].transcript;
            setvoicetext(transcript);
            setlistening(false);
        };
        recognition.onerror = (event: any ) =>{
            if(event.error =="not-allowed"){  setError("Microphone acces denied,allow microphone access")}
            else{
            setError("Try again");
    
        }setlistening(false);};
        recognition.onend = () => setlistening(false);}
        catch (err:any){
            setError("Unable to get Voice input!!!");
        }
    }

return (
    <div className="popup-base">
        <div className="popup-content">
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
            {inputMode == "text" && (
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
                                className="small-btn alt">Cancel
                            </button>
                        </div>
                    )}
                </div>
                {error && <div className="error" role="alert">{error}</div>}
                <button type="submit" className="popup-btn">SAVE</button>
            </form>
            )}
            {inputMode == "voice" && (
                <div className="voice-input-section">
                    {error && <div className="error">{error}</div>}
                    {!listening && (
                     <button   type = "button"
                               className="popup-btn"
                                onClick={handlevoiceinput}>Start Listening </button>
                    )}

                    <p> {listening ? "listening..." :"EX. Add 100 to Food"}</p>
                        {voicetext &&  (
                        <div className="voice-search">
                        <p className="voice-result">Answer: "{voicetext}"</p>
                        <button type = "button" 
                                className="popup-btn"
                                onClick={handleSubmit}>
                                    Save Expense
                        </button>
                        </div>
                        )}
                        </div>
            )}
            <div className="mode-info">
                <div>{inputMode === "text" ? "Text" : "Voice"}</div>
                <div>Input</div>
            </div>
        </div>
    </div>
);

};
export default Addexpense;
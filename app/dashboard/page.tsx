"use client";
import React, { useEffect, useState, use } from "react";
import SearchBar from "@/components/SearchBar";
import Addexpense from "@/components/Addexpense";
import ExpenseCard from "@/components/ExpenseCard";
import { ExpenseCardType } from '@/types/index';

export default function Dashboard(
    props: {
        searchParams: Promise<{ query? : string}>
        
    }
) {

    const searchParams = use(props.searchParams);
    const[query, setquery] = useState('');
    const [filteredPosts,setFilteredPosts] =useState<ExpenseCardType[]>([]);

    useEffect(() => {
        setquery(searchParams.query || '');
        const filtered = expense.filter(expense =>
        expense.title.toLowerCase().includes((searchParams.query || '').toLowerCase())||
        expense.category.toLowerCase().includes((searchParams.query || '').toLowerCase())||
        expense.title.toLowerCase().includes((searchParams.query || '').toLowerCase())
    );
    setFilteredPosts(filtered);},[searchParams.query]);
    const[istabopen , setistabopen] = useState(false);
    const [expense, setexpenses] = useState<ExpenseCardType[]>([]);
    const [editingexpense,seteditingexpense] = useState<ExpenseCardType | null>(null);
    const [settingsTAB,setsettingsTAB] = useState(false);
    const togglepopup = () => {
        setistabopen(!istabopen);};
        
    const handleaddexpense = (newexpense: ExpenseCardType )=>{
        setexpenses(prev => [newexpense,...prev]);
    };
    const handleeditexpense  = (expensetoedit: ExpenseCardType) =>{
        seteditingexpense(expensetoedit);
        setistabopen(true);
    }
    const handleupdatedexpense = (updatedexpense : ExpenseCardType) =>{
        setexpenses(prevexpenses => prevexpenses.map(expense =>expense._id === updatedexpense._id ? updatedexpense : expense));
        seteditingexpense(null);
        setistabopen(false);
    }
    const handleDeleteExpense = (id: number) => {
    setexpenses(prevExpenses => prevExpenses.filter(exp => exp._id !== id));
};



    return(
        <body>
       <section className="d-container">           
            <div className="card-stats">
                <section className="card-text">
                    <p>Total Allocated Budget:</p>
                    <p>Total Remaining Budget:</p>
                    <p>Total Expenses: ${expense.reduce((sum,exp)=>sum + exp.amount,0).toFixed(2)}</p>
               </section>
                </div>     
                <SearchBar query={query} />
                <section>
                    <p className={"heading"}>
                            {query ? `Search results for "${query}"` :"All Expenses"}
                    </p>
        <ul className="card layout">
            {query ? (
                filteredPosts.length > 0 ? (
                    filteredPosts.map((expense) => (
    <ExpenseCard 
        key={expense._id} 
        post={expense}
        onDelete={handleDeleteExpense}
        onEdit = {handleeditexpense}
    />
))
                ) : (
                    <p className="card_grid-noresult">No expenses found</p>
                )
            ) : (
                expense.length > 0 ? (
                expense.map((expense) => (
                    <ExpenseCard 
                    key={expense._id} 
                    post={expense}
                    onDelete={handleDeleteExpense}
                    onEdit={handleeditexpense} />
                ))
            ) : (<p className="card_grid-noresult">Ready to add your expenses</p>)
        )}
        </ul>
            </section>
                <div>
                    <button className="exp-btn" onClick={togglepopup} >+</button>
                {istabopen && (<Addexpense isopen={istabopen} 
                onclose={() => setistabopen(false)} 
                onSave={(handleaddexpense)}
                editingExpense={editingexpense}
                onUpdate={handleupdatedexpense}
                    />)}
                </div>
            </section>


</body>);
}
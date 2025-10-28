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
    const post = [{
        _createdAT: new Date().toLocaleDateString("ban" ,{
            month:"long",
            day:"numeric",
            year:"numeric"
        }),
        _id: 1,
        title:"Sample Expense",
        amount: 300,
        category:"Food",
        description:"Sample",
        date:"01/01/2000"
    }]

    useEffect(() => {
        setquery(searchParams.query || '');
        const filtered = post.filter(post =>
        post.title.toLowerCase().includes((searchParams.query || '').toLowerCase())||
        post.category.toLowerCase().includes((searchParams.query || '').toLowerCase())||
        post.title.toLowerCase().includes((searchParams.query || '').toLowerCase())
    );
    setFilteredPosts(filtered);},[searchParams.query]);
    const[istabopen , setistabopen] = useState(false);
    const togglepopup = () => {
        setistabopen(!istabopen);};
    return(
        <>
       <section className="d-container">           
            <div className="card-stats">
                <section className="card-text">
                    <p>Allocated Budget</p>
                    <p>Remaining Budget:</p>
                    <p>Total Expenses:</p>
                </section>
                </div>     
                <SearchBar query={query} />
                <section>
                    <p className={"heading"}>
                            {query ? `Search results for "${query}"` :"All Expenses"}
                    </p>
        <ul className="card_grid">
            {query ? (
                filteredPosts.length > 0 ? (
                    filteredPosts.map((expense) => (
                        <ExpenseCard key={expense._id} post={expense} />
                    ))
                ) : (
                    <p className="card_grid-noresult">No expenses found</p>
                )
            ) : (
                post.map((expense) => (
                    <ExpenseCard key={expense._id} post={expense} />
                ))
            )}
        </ul>
            </section>
                <div>
                    <button className="exp-btn" onClick={togglepopup}>+</button>
                {istabopen && (<Addexpense isopen={istabopen} onclose={togglepopup}/>)}
                </div>
            </section>


</>);
}
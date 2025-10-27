"use client";
import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Addexpense from "@/components/Addexpense";


export default function Dashboard({searchParams}: {
    searchParams: { query? : string}
}) {
    const[istabopen , setistabopen] = useState(false);
    const togglepopup = () => {
        setistabopen(!istabopen);};
    return(
       <section className="d-container">           
            <div className="card-stats">
                <section className="card-text">
                    <p>Allocated Budget</p>
                    <p>Remaining Budget:</p>
                    <p>Total Expenses:</p>
                </section>
                </div>     
                <SearchBar query={searchParams.query || ''} />
                    <div className="card-category">SAMPLE</div>  
                <div>
                    <button className="exp-btn" onClick={togglepopup}>+</button>
                {istabopen && (<Addexpense isopen={istabopen} onclose={togglepopup}/>)}
                </div>
            </section>
);
}
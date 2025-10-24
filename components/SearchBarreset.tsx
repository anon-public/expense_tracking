"use client";
import Link from "next/link";

const reset = () =>{
          const form = document.querySelector(".search-bar") as HTMLFormElement; 
          if(form){
            form.reset();
          }
       }

const SearchBarreset = () =>{
    return(
        <button type ="reset" onClick={reset} className="search-btn ">
        <Link href="/dashboard" className="search-btn">X</Link>    
             </button>
    )
}
export default SearchBarreset;  
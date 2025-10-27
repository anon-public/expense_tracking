import  Form  from "next/form";
import SearchBarreset from "./SearchBarreset";
import { Search } from "lucide-react";



const sample_data = [
    { id : 1 , category : "Food", expense : 35.00 , data : "01/01/2025", description: "Lunch"}
]

const SearchBar = (props: { query: string }) =>{
       const query = "Expense";                

    return(
        <Form action = "/" scroll = {false} className="search-bar">
                <input
                name = "query"
                defaultValue = {query}
                placeholder = "Track Expenses"
                className="search-input"/>

            <div className="input"></div>
                {query && <SearchBarreset />}
            
            <button type="submit" className="submit-btn"> S </button>
               <Search className="size-5"/>     
        </Form>
    )
}
export default SearchBar;
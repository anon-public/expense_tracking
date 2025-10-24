import SearchBar from "@/components/SearchBar";


export default function Dashboard({searchParams}:{
    searchParams: { query? : string}
})  {
    return(
         <section className="d-container">
            
            <div className="card-stats">
                <p className="card-text">Allocated Bugget</p>
                <SearchBar query={searchParams.query || ''} />
                    <div className="card-category">SAMPLE</div>
                </div>            
         </section>
    )
}





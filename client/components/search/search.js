import React, { useState } from "react";

import SearchByName from "./components/ByName";
import SearchByEmail from "./components/ByEmail";
import SearchByNum from "./components/ByNum";



const Search = () => {
    const [filter, setFilter] = useState("");
    return (
        <div className="mb-5">
            <div className="filterWrapper" style={{}}>
                <li><input type="radio" name="searchOption" value="name" onChange={(e) => setFilter(e.target.value)} className="mr-3" />By Name</li>
                <li><input type="radio" name="searchOption" value="email" onChange={(e) => setFilter(e.target.value)} className="mr-3" />By Email</li>
                <li><input type="radio" name="searchOption" value="mobNo" onChange={(e) => setFilter(e.target.value)} className="mr-3" />By Mobile Number</li>
            </div>
            {
                filter == "name" ? <SearchByName /> :
                    filter == "email" ? <SearchByEmail /> :
                        filter == "mobNo" ? <SearchByNum /> : null
            }
        </div>

    )
}
export default Search;
import {Outlet, useOutletContext} from "react-router-dom"

function Search({setSearchText}){

    const {adoptPet, increaseLikes} = useOutletContext()

    return (
        <>
            <div className="searchbar">
                <label htmlFor="search">Search Pets:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Type a name to search..."
                    onChange={(event) => {
                        setSearchText(event.target.value)
                    }}
                />
            </div>
            <Outlet context={{adoptPet: adoptPet, increaseLikes: increaseLikes}}/>
        </>
    )
}

export default Search;
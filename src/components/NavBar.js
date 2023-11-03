import { NavLink } from "react-router-dom"

function NavBar(){
    return <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pets">Pets</NavLink>
        <NavLink to="/add_pet">Add Pet</NavLink>
        <NavLink to="/search/pets">Search Pets</NavLink>
    </nav>
}

export default NavBar
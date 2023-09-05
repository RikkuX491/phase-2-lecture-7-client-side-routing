import { NavLink } from 'react-router-dom'

function NavBar(){
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add_pet">Add Pet</NavLink>
            <NavLink to="/search_pets">Search Pets</NavLink>
        </nav>
    )
}

export default NavBar;
import {useState} from "react"
import {Link} from "react-router-dom"
import { useOutletContext } from "react-router-dom"

function Pet({pet}){

    const {adoptPet, increaseLikes} = useOutletContext()

    const [favorite, setFavorite] = useState(false)
    const [displayName, setDisplayName] = useState(true)

    function updateDisplayName(){
        setDisplayName(displayName => !displayName)
    }
    
    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            {favorite ? (
            <button onClick={() => {
                setFavorite((favorite) => !favorite)
            }} className="favorite-button active">★</button>
            ) : (
            <button onClick={() => {
                setFavorite((favorite) => !favorite)
            }} className="favorite-button">☆</button>
            )}
            <h4 onClick={updateDisplayName}>{displayName ? pet.name : pet.animal_type}</h4>
            <button onClick={() => {
                increaseLikes(pet)
            }} className="likes-button">{pet.likes} likes</button>
            <br/><br/>
            <button onClick={() => {
                adoptPet(pet.id)
            }} className="adopt-button">Adopt</button>
            <Link to={`/pets/${pet.id}`}>View Pet Profile</Link>
        </li>
    )
}

export default Pet;
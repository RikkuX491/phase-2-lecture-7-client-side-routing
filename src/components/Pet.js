import {useState} from "react"

function Pet({pet, adoptPet, increaseLikes}){

    const [favorite, setFavorite] = useState(false)
    const [displayName, setDisplayName] = useState(true)

    function updateDisplayName(){
        setDisplayName(displayName => !displayName)
    }

    function toggleFavorite(){
        setFavorite(!favorite)
    }
    
    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            <button onClick={toggleFavorite} className={favorite? "favorite-button active" : "favorite-button"}>{favorite? "★" : "☆"}</button>
            <h4 onClick={updateDisplayName}>{displayName ? pet.name : pet.animal_type}</h4>
            <button onClick={() => {
                increaseLikes(pet)
            }} className="likes-button">{pet.likes} likes</button>
            <br/><br/>
            <button onClick={() => {
                adoptPet(pet.id)
            }} className="adopt-button">Adopt</button>
        </li>
    )
}

export default Pet;
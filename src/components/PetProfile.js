import {useState} from "react"
import { useOutletContext, useParams } from "react-router-dom"

function PetProfile({pets}){

    const {id} = useParams()

    const pet = pets.find(p => {
        return p.id === Number(id)
    })

    const [favorite, setFavorite] = useState(false)
    const [displayName, setDisplayName] = useState(true)

    const {adoptPet, increaseLikes} = useOutletContext()

    function updateDisplayName(){
        setDisplayName(displayName => !displayName)
    }

    function toggleFavorite(){
        setFavorite(!favorite)
    }

    if(!pet){
        return <h1>Error: Pet Not Found!</h1>
    }
    
    return (
        <div className="pet">
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
        </div>
    )
}

export default PetProfile
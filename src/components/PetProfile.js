import {useState} from "react"
import {useParams, useOutletContext} from "react-router-dom"

function PetProfile({pets}){

    const {id} = useParams()
    const {adoptPet, increaseLikes} = useOutletContext()

    const [favorite, setFavorite] = useState(false)
    const [displayName, setDisplayName] = useState(true)

    function updateDisplayName(){
        setDisplayName(!displayName)
    }

    const pet = pets.find(p => p.id === Number(id))

    if(!pet){
        return <h1>Error: Pet Not Found</h1>
    }
    
    return (
        <div className="pet">
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
        </div>
    )
}

export default PetProfile;
import Pet from "./Pet"

function PetList({pets, adoptPet, increaseLikes}){

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} adoptPet={adoptPet} increaseLikes={increaseLikes} />
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    )
}

export default PetList;
import NewPetForm from "./NewPetForm"
import Search from "./Search"
import PetList from "./PetList"

function PetPage({pets, setSearchText, adoptPet, addPet, updateFormData, increaseLikes}){

    return(
        <main>
            <NewPetForm addPet={addPet} updateFormData={updateFormData} />
            <Search setSearchText={setSearchText} />
            <PetList pets={pets} adoptPet={adoptPet} increaseLikes={increaseLikes} />
        </main>
    )
}

export default PetPage;
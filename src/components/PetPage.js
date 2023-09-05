import NewPetForm from "./NewPetForm"
import Search from "./Search"
import PetList from "./PetList"
import NavBar from './NavBar'
import { Switch, Route } from "react-router-dom"

function PetPage({pets, setSearchText, adoptPet, addPet, updateFormData, increaseLikes}){

    return(
        <main>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <h1>Welcome to the Pets App</h1>
                </Route>
                <Route path="/add_pet">
                    <NewPetForm addPet={addPet} updateFormData={updateFormData} />
                </Route>
                <Route path="/search_pets">
                    <Search setSearchText={setSearchText} />
                    <PetList pets={pets} adoptPet={adoptPet} increaseLikes={increaseLikes} />
                </Route>
            </Switch>
        </main>
    )
}

export default PetPage;
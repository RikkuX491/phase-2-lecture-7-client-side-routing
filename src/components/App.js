import Header from "./Header"
import NewPetForm from "./NewPetForm"
import Search from "./Search"
import PetList from "./PetList"
import NavBar from "./NavBar"
import {useState, useEffect} from "react"
import { Route, Switch } from "react-router-dom"

function App() {

  const [searchText, setSearchText] = useState("")
  const [formData, setFormData] = useState({
    likes: 0
  })
  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/pets")
    .then(response => response.json())
    .then(petData => setPets(petData))
  }, [])

  const filteredPets = pets.filter(pet => {
    if(searchText === ""){
      return true
    }
    return pet.name.toUpperCase().includes(searchText.toUpperCase()) || pet.animal_type.toUpperCase().includes(searchText.toUpperCase())
  })

  function adoptPet(id){
    fetch(`http://localhost:4000/pets/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      setPets(pets.filter(pet => {
        return pet.id !== id
      }))
    })
  }

  function addPet(event){
    event.preventDefault()

    fetch("http://localhost:4000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newPet => setPets([...pets, newPet]))
  }

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function increaseLikes(pet){
    fetch(`http://localhost:4000/pets/${pet.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({likes: pet.likes + 1})
    })
    .then(response => response.json())
    .then(updatedPet => {
      setPets(pets => pets.map(p => {
        if(p.id === updatedPet.id){
          return {...p, likes: p.likes + 1}
        }
        else{
          return p
        }
      }))
    })
  }

  return (
    <div className="app">
      <NavBar/>
      <Header />
      <Switch>
        <Route path="/add_pet">
          <NewPetForm addPet={addPet} updateFormData={updateFormData} />
        </Route>
        <Route path="/search">
          <Search setSearchText={setSearchText} searchText={searchText} />
          <PetList pets={filteredPets} adoptPet={adoptPet} increaseLikes={increaseLikes} />
        </Route>
        <Route exact path="/">
          <h1>Welcome! Here is the list of pets available for adoption:</h1>
          <PetList pets={pets} adoptPet={adoptPet} increaseLikes={increaseLikes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
import Header from "./Header"
import Home from "./Home"
import NewPetForm from "./NewPetForm"
import Search from "./Search"
import PetList from "./PetList"
import ErrorPage from "./ErrorPage"
import PetProfile from "./PetProfile"

import {useState, useEffect} from "react"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {

  const [searchText, setSearchText] = useState("")
  const [formData, setFormData] = useState({})
  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/pets")
    .then(response => response.json())
    .then(petData => setPets(petData))
  }, [])

  const filteredPets = pets.filter(pet => {
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
      body: JSON.stringify({...formData, likes: 0})
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
          return updatedPet
        }
        else{
          return p
        }
      }))
    })
  }

  const routes = [
    {
      path: "/",
      element: <Home adoptPet={adoptPet} increaseLikes={increaseLikes} />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <h1 className="home">Welcome to the Flatapets website!</h1>
        },
        {
          path: "/pets",
          element: <>
            <Search setSearchText={setSearchText} />
            <PetList pets={filteredPets} />
          </>
        },
        {
          path: "/add_pet",
          element: <NewPetForm addPet={addPet} updateFormData={updateFormData} />
        },
        {
          path: "/pets/:id",
          element: <PetProfile pets={pets}/>
        }
      ]
    }
  ]

  const router = createBrowserRouter(routes)

  return (
    <div className="app">
      <Header />

      {/* <Home />
      <NewPetForm addPet={addPet} updateFormData={updateFormData} />
      <Search setSearchText={setSearchText} />
      <PetList pets={filteredPets} adoptPet={adoptPet} increaseLikes={increaseLikes} /> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
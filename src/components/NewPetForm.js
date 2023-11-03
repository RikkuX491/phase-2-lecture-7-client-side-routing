import {useState} from "react"
import {useNavigate} from "react-router-dom"

function NewPetForm({addPet, updateFormData}) {

  const [submittedForm, setSubmittedForm] = useState(false)
  const navigate = useNavigate()

  if(submittedForm){
    navigate('/pets')
  }

    return (
      <div className="new-pet-form">
        <h2>New Pet</h2>
        <form onSubmit={(event) => {
          addPet(event)
          setSubmittedForm(true)
        }}>
          <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" required/>
          <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" required/>
          <input onChange={updateFormData} type="text" name="animal_type" placeholder="Type of animal" required/>
          <button type="submit">Add Pet</button>
        </form>
      </div>
    );
  }
  
  export default NewPetForm;
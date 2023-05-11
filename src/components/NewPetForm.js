function NewPetForm({addPet, updateFormData}) {

    return (
      <div className="new-pet-form">
        <h2>New Pet</h2>
        <form onSubmit={addPet}>
          <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" required/>
          <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" required/>
          <input onChange={updateFormData} type="text" name="animal_type" placeholder="Type of animal" required/>
          <button type="submit">Add Pet</button>
        </form>
      </div>
    );
  }
  
  export default NewPetForm;
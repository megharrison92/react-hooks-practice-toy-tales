import React, { useState } from "react";

function ToyForm({addNewToy}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  function handleNameChange(e){
    setName(e.target.value)
  }

  function handleImageChange(e){
    setImage(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const newToy = {
      key: name,
      name: name,
      image: image,
      likes: 0
    }
    addNewToy(newToy)
  }

  return (
    <div className="container">
      <form onSubmit = {handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange = {handleNameChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange = {handleImageChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

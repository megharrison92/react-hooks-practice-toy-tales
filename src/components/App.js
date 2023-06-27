import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArray, setToyArray] = useState([])
  useEffect( () =>  {
    fetch ("http://localhost:3001/toys")
      .then( r => r.json())
      .then( toyData => setToyArray(toyData))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy) {
    setToyArray([...toyArray, newToy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy = {addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArray = {toyArray}/>
    </>
  );
}

export default App;

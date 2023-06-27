import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyArray}) {
  const toyCards = toyArray.map(toy => {
    return(
      <ToyCard 
        key = {toy.id}
        name = {toy.name}
        image = {toy.image}
        likes = {toy.likes}
        id = {toy.id}
      />
    )
  })
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;

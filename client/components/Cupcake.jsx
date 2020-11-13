import React from 'react'
import Cupcake from '../../data/cupcake'

function Cupcake () {
  return (
    <div className="recipes">
      <h2>{cupcake.name}</h2>
      <ul>
          <li>{cupcake.ingredient1}</li>
          <li>{cupcake.ingredient2}</li>
          <li>{cupcake.ingredient3}</li>
          <li>{cupcake.ingredient4}</li>
          <li>{cupcake.ingredient5}</li>
          <li>{cupcake.ingredient6}</li>
          <li>{cupcake.ingredient7}</li>
          <li>{cupcake.ingredient8}</li>
          <li>{cupcake.ingredient9}</li>
          <li>{cupcake.ingredient10}</li>
          <li>{cupcake.ingredient11}</li>
      </ul>
      <p>{cupcake.instructions}</p>
    </div>
  )
}

export default Cupcake
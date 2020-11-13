import React from 'react'
import chickpea from '../../data/chickpea'

function Chickpea () {
  return (
    <div className="recipes">
      <h2>{chickpea.name}</h2>
      <ul>
          <li>{chickpea.ingredient1}</li>
          <li>{chickpea.ingredient2}</li>
          <li>{chickpea.ingredient3}</li>
      </ul>
      <p>{chickpea.instructions}</p>
    </div>
  )
}

export default Chickpea
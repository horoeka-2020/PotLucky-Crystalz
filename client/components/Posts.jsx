import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'







function Posts () {
  return (
    <>
    <Carousel>
    <Carousel.Item>
    <a href="./Cupcake"><img
      className=""
      src="./images/cupcake.jpg"
      alt="First slide"

    />
</a>
    <Carousel.Caption>
      <h3>Vegan Cupcake</h3>
      <p>Wow so yum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=""
      src="./images/chickpea.jpg"
      alt="Second slide"
  
    />

    <Carousel.Caption>
      <h3>Chickpea Salad</h3>
      <p>Delicious.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=""
      src="./images/sossie.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Vegan Sausage Roll</h3>
      <p>Yummo.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
    </>
  )
}

export default Posts


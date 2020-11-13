import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Posts from './Posts'




function Home (props) {
  return (
    <div className="container">
      <Header />
      <div className="blogcontainer">
      <Posts />
      </div>
      <Footer />
    </div>
  )
}

export default Home

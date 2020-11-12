import React from 'react'
import header from '../../data/header'

function Header () {
  return (
    <div className="header">
      <a href={header.link}><h1>{header.title}</h1></a>
    </div>
  )
}

export default Header

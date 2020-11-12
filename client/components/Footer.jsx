import React from 'react'
import footer from '../../data/footer'

function Footer () {
  return (
    <div className="footer">
      <p>{footer.author}. {footer.copyright}.</p>
    </div>
  )
}

export default Footer

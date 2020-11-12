import React from 'react'
import otherblogs from '../../data/other-blogs'

function OtherBlogs () {
  return (
    <div className="otherblogs">
      {
        otherblogs.map(otherblog => {
          return <div key={otherblog.id}>
            <em><h1>{otherblog.blogTitle}</h1></em>
            <a href={otherblog.link}>{otherblog.link}</a>
            <hr/>
          </div>
        })
      }
    </div>
  )
}

export default OtherBlogs

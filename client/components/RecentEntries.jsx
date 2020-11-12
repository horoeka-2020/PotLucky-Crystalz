import React from 'react'
import recententries from '../../data/recent-entries'

function RecentEntries () {
  return (
    <div className="recententries">
      {
        recententries.map(recententries => {
          return <div key={recententries.id}>
            <h1>{recententries.name}</h1>
            <a href={recententries.link}>{recententries.link}</a>
            <hr/>
          </div>
        })
      }
    </div>
  )
}

export default RecentEntries

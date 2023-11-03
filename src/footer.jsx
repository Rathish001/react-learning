import React from 'react'

const footer = ({length}) => {
    const today=new Date();

  return (
    <footer>
        <p>{length} list {length===1?"item":"items"}</p>
    </footer>
  )
}

export default footer
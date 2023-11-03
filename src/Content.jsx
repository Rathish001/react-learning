import React from 'react'
import Itemslist from './itemslist'



  const Content = ({items,handleCheck,handleDelete}) => {
    
  return (
    <main>
      {items.length?(
        <Itemslist
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      ):(
        <p>Your list is empty</p>
       )}
    </main>
  )
}

export default Content


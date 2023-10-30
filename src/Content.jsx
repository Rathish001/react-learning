import React from 'react'
import { useState } from 'react';
import {FaTrash} from 'react-icons/fa';

const Content = () => {
    const [items,setItems]=useState([
      {
        id:1,
        checked:true,
        item:"Item 1"
      },
      {
        id:2,
        checked:false,
        item:"Item2"
      },
      {
        id:3,
        checked:true,
        item:"item3"
      }
    ])
    
  const handleCheck=(idd)=>{
    const listItems=items.map((item)=>item.id===idd?{...item,checked:!item.checked}:item)
    setItems(listItems)
    localStorage.setItem('Itemlist',JSON.stringify(listItems));
  }

  const handleDelete=(id)=>{
    const listItems=items.filter((item)=>item.id!==id)
    setItems(listItems)
    localStorage.setItem('Itemlist',JSON.stringify(listItems));
  }

  return (
    <main>
      {items.length?(
      <ul>
       {items.map((item)=>(
        <li className='item' key={item.id}>
          <input type="checkbox" 
          onChange={()=>handleCheck(item.id)}
          checked={item.checked} />
          <label 
            style={(item.checked)?{textDecoration:"line-through"}:null}
            onDoubleClick={()=>handleCheck(item.id)}>
            {item.item}
          </label>
          <FaTrash 
            onClick={()=>handleDelete(item.id)}
            role='button'/>
        </li>


       ))}
       </ul>):(
        <p>Your list is empty</p>
       )}
    </main>
  )
}

export default Content


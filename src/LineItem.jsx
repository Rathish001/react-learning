import React from 'react'
import {FaTrash} from 'react-icons/fa';
const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
    
        <li className='item'>
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
  
  )
}

export default LineItem
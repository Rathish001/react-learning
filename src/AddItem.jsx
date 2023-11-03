import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'



const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef=useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addLabel">Add Item</label>
        <input 
            autoFocus
            required
            ref={inputRef}
            id='addLabel'
            type='text'
            placeholder='Add Item'
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}

        />
        <button
            type='submit'
            onClick={()=>{inputRef.current.focus()}}>
            
            
            <FaPlus/>
            
            
        </button>
    </form>
  )
}

export default AddItem
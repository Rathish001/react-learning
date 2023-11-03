import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <form className='searchForm'>
        <label htmlFor="search">Search</label>
        <input 
            type="text"
             id='search'
              placeholder='Search here'
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
               />
    </form>
  )
}

export default Search
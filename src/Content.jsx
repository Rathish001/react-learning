import React from 'react'

const Content = () => {
    const handleNameChange=()=>{
        const names=["rathish","rakshitha","John"];
        const int=Math.floor(Math.random()*3);
        return names[int];
      }

      const handleClick=()=>{
        alert("You clicked it")
      }

      const handleClick2=(name)=>{
        alert(`${name} was clicked`)
      }
      const handleClick3=(e)=>{
        console.log(e.target)
      }

  return (
    <main>
        <p onDoubleClick={handleClick}>Hello {handleNameChange() }</p>
        <button onClick={handleClick}>Click it</button>
        <button onClick={()=>handleClick2('Rathish')}>Click it</button>
        <button onClick={(e)=>handleClick3(e)}>Click it</button>


    </main>
  )
}

export default Content
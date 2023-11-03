
import './App.css';
import Header from "./header"
import AddItem from './AddItem';
import Search from './Search';
import Content from'./Content'
import Footer from './footer'
import { useState } from 'react';

function App() {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem("Itemlist")));


const setAndSaveItems=(newItemss)=>{
  setItems(newItemss)
  localStorage.setItem('Itemlist',JSON.stringify(newItemss));

}

const [newItem,setNewItem]=useState("")

const [search,setSearch]=useState("")

const addItem=(item)=>{
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem={id,checked:false,item};
  const listItems=[...items,myNewItem]
  setAndSaveItems(listItems)
}
  
const handleCheck=(id)=>{
  const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
  setAndSaveItems(listItems)
}

const handleDelete=(id)=>{
  const listItems=items.filter((item)=>item.id!==id)
  setAndSaveItems(listItems)
}

const handleSubmit=(e)=>{
  e.preventDefault();
  
  addItem(newItem)
  setNewItem("")

}

  return (
    <div className="App">
      <Header title="Grocery"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}

      />
      <Search
        search={search}
        setSearch={setSearch}
        />
      <Content
        items={items.filter((item)=>(item.item.toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>


     
    </div>
  );
}

export default App;


import './App.css';
import Header from "./header"
import Content from'./Content'
import Footer from './footer'

function App() {
  const handleNameChange=()=>{
    const names=["rathish","rakshitha","John"];
    const int=Math.floor(Math.random()*3);
    return names[int];
  }

  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>


     
    </div>
  );
}

export default App;

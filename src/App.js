import React,{useState}from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipe';

function App() {
  const [search,setSearch]=useState("");
  const [recipes, setRecipes]=useState([]);

const APP_ID="6c20b451";
const APP_KEY="e8abd9fd084655880e6a2f1e4e4c24df";


  const onInputChange=(e)=>{  //e stands for event
    setSearch(e.target.value);


  }
  return (
    <div className="App">
      
      <Header search={search} onInputChange={onInputChange} />{/*      this is a shortcut  */}
    <Recipes />
    </div>
  );
}

export default App;

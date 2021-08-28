import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import FoodStallers from './components/pages/FoodStallers';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {


  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "6c20b451";
  const APP_KEY = "e8abd9fd084655880e6a2f1e4e4c24df";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(result.data.hits);


  }


  const onInputChange = (e) => {  //e stands for event
    setSearch(e.target.value);


  };

  const onSearchClick=()=>{
    getRecipes();


  }
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home}/>
        <Route path='/about-us' component={AboutUs}/>
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/food-stall' component={FoodStallers} />
        
      </Switch>
      </Router>
     
      
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>    
     
      

      <div className="container">
        <Recipes recipes={recipes} />
        
      </div>

    </>
  );
}

export default App;

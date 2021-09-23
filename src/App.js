import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import FoodStallers from "./components/pages/FoodStallers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "7d40bcc5";
  const APP_KEY = "31acdc5d2a12f7e7e4dae49979a85141";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const result = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(result.data.hits);
  };

  const onInputChange = (e) => {
    //e stands for event
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/food-stall" component={FoodStallers} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>

      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;

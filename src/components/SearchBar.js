import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";


function SearchBar() {
  const [search, setSerach] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "7d40bcc5";
  const APP_KEY = "31acdc5d2a12f7e7e4dae49979a85141";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
      <>
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />

      <div className="container">
        <Recipes recipes={recipes} />
      </div>
      </>
    


  );
}

export default SearchBar;
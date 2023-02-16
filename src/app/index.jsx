import axios from "axios"
import { useEffect } from "react";
import { useState } from "react"
import { BASE_URL } from "../constants/url";
import { GlobalContext } from "../GlobalContext";
import { HomePage } from "../pages/HomePage/HomePage";
import Router from "../routes/Router";

export const App = () => {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    fetchPokemonList()
  }, [])


  const fetchPokemonList = () => {
    axios
      .get(BASE_URL)
      .then((resp) => {
        setPokemonList(resp.data.results);
      })
      .catch((error) => {
        console.log("Erro ao buscar informaçöes de pokemon");
        console.log(error.response);
      });
  };

  const context = { 
    pokemonList
  }

  return (
    <GlobalContext.Provider value={context}>
      <Router/>
    </GlobalContext.Provider>
  )
}
import { useState } from 'react';
import axios from "axios";
import './App.css'

function App() {

  const [allPokemon, setPokemon] = useState([])


  const fetchPokemon = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(data => {
        return data.json()
      })
      .then((parsedData) => {
        console.log(parsedData);
        setPokemon(parsedData)
      })
      .catch(err => console.log("ERORRRRRR", err));
  }

  //axios
  const axiosPokemon = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(serverRes => {
        console.log(serverRes.data);
        setPokemon(serverRes.data);
      })
      .catch(err => console.log(err));

  }
  return (
    <>
      <button onClick={() => fetchPokemon()} > Fetch Pokemon </button>
      <button onClick={axiosPokemon} > Axios Pokemon </button>


      {
        allPokemon.map((pokemon) => {
          return (
            <ul key={pokemon.id}>
              <li > {pokemon.name}</li>

            </ul>

          );
        })
      }
    </>
  )
}

export default App
//I couldnt get the pokemon api to work But i was able to get the superheros api to work
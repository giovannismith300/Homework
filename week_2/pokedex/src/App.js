
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import PokeTable from './components/PokeTable';
import Pokemon from './models/Pokemon';
import {useState} from 'react'

function App() {
  let url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  const [pokeNames, setPokeNames] = useState([])
  const [pokemon, setPokemon] = useState([])



  async function fetchPokemon(){
    const res = await fetch(url , {
      method: "GET",
      header: {"Content-Type": "application/json"}

    })
    const data = await res.json()
    let results = data.results
    

    let names = await results.map((result) => {
      return result.name
    })
    
    

     
    names.map((name) => {
      
      url = "https://pokeapi.co/api/v2/pokemon/"
      url += name
      
      fetchPokeStats(url, name)
    }
    
    
  )}



     async function fetchPokeStats(url, name){
      
      const res =  await fetch(url, {
        method: "GET",
        header: {"Content-Type": "application/json"}
  
      })

      const data =  await res.json()
     

      const singlePokemon = new Pokemon(name, data.weight, data.height)
      //console.log(singlePokemon)
      setPokemon(current => [...current, singlePokemon])

    
    }
    


    

  




  return (
    <div className="App text-center">
      <h1 className="mb-3"> Welcome To The Pokedex!</h1>
      
      <PokeTable pokemon = {pokemon} fetchPokemon = {fetchPokemon}></PokeTable>
    </div>
  );
}

export default App;

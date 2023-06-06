import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Pokemon from '../models/Pokemon'
import App from '../App'


export default function PokeTable(props) {
  return (
    <div>
        <button onClick = {props.fetchPokemon} className="btn btn-primary">Fetch Pokemon</button>
        <table className="table">
                <thead>
            <tr>
                    <td> Name</td>
                    <td> Height</td>
                    <td> Weight</td>
            </tr>
                </thead>
            <tbody>
            {props.pokemon.map((single) => {
                    return(
                    <tr key = {single.name}>
                        <td>{single.name}</td>
                        <td>{single.height}</td>
                        <td>{single.weight}</td>
                    </tr>
                )})}
            </tbody>

        </table>
    </div>
  )
}

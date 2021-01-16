import React from 'react'
import Pokecard from './Pokecard'

const Pokedex = (props) => {
    return (
        < div className="Pokedex" >
            <h1>Pokedex</h1>
            {props.pokemon.map((p) => {
                return (
                    <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />)
            })}


        </div >
    )
}


export default Pokedex
import React from 'react';


const Pokecard = ({ name, id, type, base_experience }) => {
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div id="Pokecard">
            <h2 className="Pokecard-name">
                {name}
            </h2>
            <img className="Pokecard-img" src={img} alt="" />
            <h3>Type: {type}</h3>
            <h3>EXP:{base_experience} </h3>
        </div>
    )
}
export default Pokecard;
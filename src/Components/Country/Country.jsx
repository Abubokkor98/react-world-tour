import React, { useState } from 'react'
import './Country.css'

export default function Country({country, handleVisitedCountry}) {
    console.log(country);
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    console.log(handleVisitedCountry);

  return (
    <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
        <h3>Country: <span style={{color: visited ? 'purple' : 'black'}}>{name.common}</span></h3>
        <img src={flags.png} alt="" />
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <p><small>Code: {cca3}</small></p>
        <button onClick={handleVisited}>{visited? "Visited" : 'Visit'}</button>
        {visited ? 'I Have Visited This Country.' : 'I want to Visit'}
        <br />
        <button>Mark As Visited</button>

    </div>
  )
}

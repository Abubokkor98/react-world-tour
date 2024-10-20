import React, { useState } from 'react'
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

export default function Country({country, handleVisitedCountry, handleVisitedFlags}) {
    // console.log(country);
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }    



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
        <button onClick={() => handleVisitedCountry(country)}>Mark As Visited</button>
        <br />
        <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
        <hr />
        <CountryDetail country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
        ></CountryDetail>

    </div>
  )
}

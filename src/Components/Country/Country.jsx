import React from 'react'
import './Country.css'

export default function Country({country}) {
    console.log(country);
    const {name, flags, population, area} = country;
  return (
    <div className='country'>
        <h3>Country: {name.common}</h3>
        <img src={flags.png} alt="" />
        <p>Population: {population}</p>
        <p>Area: {area}</p>

    </div>
  )
}

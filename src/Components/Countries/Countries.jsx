import React, { useEffect, useState } from 'react'
import Country from '../Country/Country';
import './Countries.css'

export default function Countries() {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountry = (country) =>{
        console.log("Add this to your visited country");
        console.log(country);
    }

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

  return (
    <div>
        <h3>Countries{countries.length}</h3>
        <div>
            <h4>Visited Countries</h4>
            <ul>

            </ul>
        </div>
        <div className='country-container'>
        {
            countries.map(country=> <Country 
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                key={country.cca3}></Country>)
        }
        </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import Country from '../Country/Country';
import './Countries.css'

export default function Countries() {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountry = (country) =>{
        console.log("Add this to your visited country");
        
        // Add visited countries to the DOM
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
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
            <h4>Visited Countries: {visitedCountries.length}</h4>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }

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

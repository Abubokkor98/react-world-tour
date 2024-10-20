import React, { useEffect, useState } from 'react'
import Country from '../Country/Country';
import './Countries.css'

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
  
    const handleVisitedCountry = (country) =>{
        console.log("Add this to your visited country");
        // Add visited countries to the DOM
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
    }

    // remove item from an array in a state
    // use filter to select all the elements except the one you want to remove

  return (
    <div>
        <h3>Countries{countries.length}</h3>
        {/* Visited country */}
        <div>
            <h4>Visited Countries: {visitedCountries.length}</h4>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }

            </ul>
        </div>
        {/* display flags */}
        <div className='flag-container'>
            {
                visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
            }

        </div>
        {/* display countries */}
        <div className='country-container'>
        {
            countries.map(country=> <Country 
                country={country}
                handleVisitedFlags={handleVisitedFlags}
                handleVisitedCountry={handleVisitedCountry}
                key={country.cca3}></Country>)
        }
        </div>
    </div>
  )
}

import React from 'react'
import CountryData from '../CountryData/CountryData'

export default function CountryDetail(props) {
    // const {country, handleVisitedCountry, handleVisitedFlags} = props;
  return (
    <div>
        <h4>CountryDetail</h4>
        <hr />
        {/* <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
        ></CountryData> */}
        <CountryData {...props}></CountryData>
    </div>
  )
}

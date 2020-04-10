import React from 'react';
import './css/AllCountry.css';
import uniqueid from 'uniqid';

const AllCountry = (props) => {
    const renderCountryName = () => {
        if(props.allCountry)
            return props.allCountry.map((country)=><li onClick={()=>props.currentCountry(country)} key={uniqueid()}>{country.country}</li>)
    }
    return ( 
        <div className="country-name-list">
            <ul>
                {renderCountryName()}
            </ul>
        </div>
    )
}

export default AllCountry;
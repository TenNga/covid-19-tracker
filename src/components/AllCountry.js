import React from 'react';
import './css/AllCountry.css';
import uniqueid from 'uniqid';

const AllCountry = (props) => {
    const renderCountryName = () => {
       return props.allCountryName.map((country)=><li key={uniqueid()}>{country}</li>)
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
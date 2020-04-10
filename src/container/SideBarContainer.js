import React from 'react';
import AllCountry from '../components/AllCountry';
import './css/SideBarContainer.css';

const SideBarContainer = (props) => {
    return(
        <div className="side-bar-container">
            <h1>COVID-19 Tracker</h1>
            <h3>All Countries</h3>
            <AllCountry 
                currentCountry = {props.currentCountry} 
                allCountry={props.allCountry} 
            />
        </div>
    )
}

export default SideBarContainer;
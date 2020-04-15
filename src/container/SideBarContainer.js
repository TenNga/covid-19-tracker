import React from 'react';
import AllCountry from '../components/AllCountry';
import './css/SideBarContainer.css';

class SideBarContainer extends React.Component {
    state = {
        term: ""
    }

    handleChange = (e) => {
        this.setState({term: e.target.value})
    }

    filterCountryByTerm = () => {
        if(this.state.term){
           return this.props.allCountry.filter((country)=>{
                return country.country.toUpperCase().includes(this.state.term.toUpperCase())
            })
        } else {
            return this.props.allCountry
        }
    }
    render(){
        return(
            <div className="side-bar-container">
                <h1>COVID-19 Tracker</h1>
                <h3>All Countries</h3>
                <input 
                    id="search-country" 
                    onChange={this.handleChange}
                    value={this.state.term}
                    placeholder="Search by country name"
                ></input>
                <AllCountry 
                    currentCountry = {this.props.currentCountry} 
                    allCountry={this.filterCountryByTerm()} 
                />
            </div>
        ) 
    }
}

export default SideBarContainer;
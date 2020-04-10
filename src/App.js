import React from 'react';
import './App.css';

import DisplayContainer from './container/DisplayContainer';
import SideBarContainer from './container/SideBarContainer';


class App extends React.Component {

  state = {
    allCountry: "",
    countryName: []
  }

  componentDidMount = () => {
    fetch("https://covid-19-data.p.rapidapi.com/country/all?format=undefined", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "84704a0959mshe69dd18d898a82ep171a1djsn86283313e1e6"
      }
    })
    .then(response => response.json())
    .then( datas =>{
      this.setState({allCountry: datas});
      this.filterCountry();
    })
    .catch(err => {
      console.log(err);
    });
  }

  filterCountry = () => {
    if(this.state.allCountry) {
      const allCountry = [];
      this.state.allCountry.forEach((data)=>{
        allCountry.push(data.country)
      })
      this.setState({countryName: allCountry})
    }
  }
  render(){
    console.log("State Datas: ", this.state)
    return (
      <div className="App">
        <div className="side-bar">
          <SideBarContainer allCountryName={this.state.countryName} allCountry = {this.state.allCountry} />
        </div>
        <div className="display-container">
          <DisplayContainer />
        </div>
        
      </div>
    );
  }
}

export default App;

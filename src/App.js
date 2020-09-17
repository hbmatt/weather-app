import React, { Component } from "react";

import SearchForm from "./components/SearchForm";
import DisplayWeather from "./components/DisplayWeather";

import "./reset.css";
import "./App.scss";

export class App extends Component {
  state = {
    unit: "imperial",
    weather: {
      place: '',
      id: '',
      desc: '',
      temp: '',
      feelsLike: '',
    }
  };

  setWeather = (place, id, desc, temp, feelsLike) => {
    this.setState({
      weather: { place, id, desc, temp, feelsLike }
    })
  };

  render() {
    return (
      <div className="container">
        <DisplayWeather weather={this.state.weather} unit={this.state.unit} />
        <SearchForm setWeather={this.setWeather} unit={this.state.unit} />
      </div>
    );
  }
}

export default App;

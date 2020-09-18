import React, { Component } from "react";

import SearchForm from "./components/SearchForm";
import DisplayWeather from "./components/DisplayWeather";

import "./reset.css";
import "./App.scss";

export class App extends Component {
  state = {
    unit: true,
    weather: {
      place: "",
      id: "",
      desc: "",
      temp: "",
      feelsLike: "",
    },
  };

  setWeather = (place, id, desc, temp, feelsLike) => {
    this.setState({
      weather: { place, id, desc, temp, feelsLike },
    });
  };

  toggleUnits = () => {
    this.setState({ unit: !this.state.unit })
  };

  render() {
    return (
      <div className="container">
        <DisplayWeather weather={this.state.weather} unit={this.state.unit} />
        <SearchForm setWeather={this.setWeather} unit={this.state.unit} />
        <button
          className="button is-rounded is-info is-light"
          onClick={this.toggleUnits}
          style={{ position: "absolute", bottom: "5px", right: "5px" }}
        >
          { this.state.unit ? "°F" : "°C" }
        </button>
      </div>
    );
  }
}

export default App;

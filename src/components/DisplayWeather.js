import React, { Component } from "react";

import "../assets/css/weather-icons.min.css";

export class DisplayWeather extends Component {
  render() {
    return (
      <div className={"item" + (this.props.weather.id ? "" : " is-hidden")}>
        <i
          className={`wi wi-owm-${this.props.weather.id}`}
          style={{ fontSize: "3.125rem" }}
        ></i>
        <div className="content">
          <h2 className="title">{this.props.weather.place}</h2>
          <h3 className="subtitle">{this.props.weather.desc}</h3>
          <p>Current Temperature: {this.props.weather.temp}</p>
          <p>Feels Like: {this.props.weather.feelsLike}</p>
        </div>
      </div>
    );
  }
}

export default DisplayWeather;

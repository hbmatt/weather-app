import React, { Component } from "react";

import "../assets/css/weather-icons.min.css";

export class DisplayWeather extends Component {
  render() {
    return (
      <div className={"item clearfix" + (this.props.weather.id ? "" : " is-hidden")}>
        <i
          className={`wi wi-owm-${this.props.weather.id}`}
          style={{ fontSize: "3.125rem", float: "left" }}
        ></i>
        <div className="info">
          <h2 className="title">{this.props.weather.place}</h2>
          <h3 className="subtitle">{this.props.weather.desc}</h3>
          <p>Current Temperature: {this.props.weather.temp} °{(this.props.unit === "imperial" ? 'F' : 'C')}</p>
          <p>Feels Like: {this.props.weather.feelsLike} °{(this.props.unit === "imperial" ? 'F' : 'C')}</p>
        </div>
      </div>
    );
  }
}

export default DisplayWeather;

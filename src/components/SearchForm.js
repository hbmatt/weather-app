import React, { Component } from "react";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export class SearchForm extends Component {
  state = {
    zipcode: "",
    error: false,
  };

  getWeather = (zipcode) => {
    let that = this;
    let unit = this.props.unit ? "imperial" : "metric";

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${API_KEY}&units=${unit}`,
      { mode: "cors" }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const place = response.name;
        const weatherId = response.weather[0].id;
        const desc = response.weather[0].main;
        const temp = that.props.unit
          ? `${response.main.temp} °F`
          : `${response.main.temp} °C`;
        const feelsLike = that.props.unit
          ? `${response.main.feels_like} °F`
          : `${response.main.feels_like} °C`;

        that.setState({ error: false });

        that.props.setWeather(place, weatherId, desc, temp, feelsLike);
      })
      .catch((err) => {
        that.setState({ error: true });
      });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.getWeather(this.state.zipcode);
    this.setState({ zipcode: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="item">
        <form onSubmit={this.onSubmit}>
          <div className="field">
            <div className="field has-addons">
              <div className="control">
                <input
                  type="text"
                  name="zipcode"
                  className={"input" + (this.state.error ? " is-danger" : "")}
                  value={this.state.zipcode}
                  onChange={this.onChange}
                  placeholder="Enter zipcode..."
                />
              </div>
              <div className="control">
                <button className="button is-info">Search</button>
              </div>
            </div>
            <p className="help is-danger">
              {this.state.error ? "Please enter a valid zipcode." : ""}
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;

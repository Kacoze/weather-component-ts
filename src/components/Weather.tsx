import * as React from 'react';
import CityWeather from './City';
import './Weather.css';

const cities = ['Lodz', 'Warszawa', 'Berlin', 'New York', 'Londyn'];

class Weather extends React.Component {
  public state = { randomCities: [] };
  public citiesInterval: any;
  public getRandom(arr: string[], n: number) {
    const randomCities = new Array(n);
    let len = arr.length;
    const taken = new Array(len);
    if (n > len) {
      throw new RangeError("getRandom: more elements taken than available");
    }
    while (n--) {
      const x = Math.floor(Math.random() * len);
      randomCities[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    this.setState({ randomCities });
  }
  public componentDidMount() {
    this.getRandom(cities, 3);
    this.citiesInterval = setInterval(() => this.getRandom(cities, 3), 10000);
  }
  public componentWillUnmount() {
    clearInterval(this.citiesInterval);
  }
  public render() {
    return (
      <div className="weatherComponent__Container">
        {this.state.randomCities && this.state.randomCities.map(i => {
          return <CityWeather city={i} key={i} />;
        })}
      </div>
    );
  }
}

export default Weather;

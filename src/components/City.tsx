import * as React from 'react';
import WeatherImage from './WeatherImage';

class City extends React.Component<{ city: string }> {
  public state: { weather: any } = { weather: {} };
  public weatherInterval: any;
  public getWeatherData = () => {
    const url = `https://query.yahooapis.com/v1/public/yql?q=`;
    const query = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${this.props.city}')&format=json`;
    fetch(url + query).then(res => res.json()).then(i => {
      this.setState({ weather: i.query.results.channel })
    });
  }
  public handleClick = () => {
    const link = this.state.weather.link;
    const url = link.slice(link.indexOf('https'), link.length);
    const win = window.open(url, '_blank');
    if(win) {
      win.focus();
    }
  }
  public componentDidMount() {
    this.getWeatherData();
    this.weatherInterval = setInterval(this.getWeatherData, 10000);
  }
  public componentWillUnmount() {
    clearInterval(this.weatherInterval);
  }
  public render() {
    const { weather: { item, units } } = this.state;
    return (
      <div
        className="weatherComponent__City card w-100 text-center mt-1"
        onClick={this.handleClick}
      >
        <h5 className="card-title">{this.props.city}</h5>
        {item && (
          <div className="card-body">
            <WeatherImage code={item.condition.code} />
            <p className="card-text">{item.condition.temp} {units.temperature}</p>
            <p className="card-text">{item.condition.text}</p>
          </div>
        )}
      </div>
    );
  }
}

export default City;

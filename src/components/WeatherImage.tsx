import * as React from 'react';

const CodeToIcon = [
  'wi-hurricane',
  'wi-thunderstorm',
  'wi-hurricane',
  'wi-thunderstorm',
  'wi-thunderstorm',
  'wi-snow-wind',
  'wi-rain-wind',
  'wi-snow-wind',
  'wi-rain-wind',
  'wi-rain-wind',
  'wi-rain-wind',
  'wi-rain-wind',
  'wi-rain-wind',
  'wi-snow-wind',
  'wi-snow-wind',
  'wi-snow-wind',
  'wi-snow-wind',
  'wi-hail',
  'wi-hail',
  'wi-hail',
  'wi-fog',
  'wi-hail',
  'wi-fog',
  'wi-meteor',
  'wi-windy',
  'wi-snowflake-cold',
  'wi-day-cloudy',
  'wi-night-alt-cloudy',
  'wi-day-cloudy',
  'wi-night-alt-cloudy',
  'wi-day-cloudy',
  'wi-night-clear',
  'wi-day-sunny',
  'wi-night-clear',
  'wi-day-sunny',
  'wi-rain-wind',
  'wi-hot',
  'wi-thunderstorm',
  'wi-thunderstorm',
  'wi-thunderstorm',
  'scattered showers',
  'wi-snow-wind',
  'wi-snow-wind',
  'wi-snow-wind',
  'wi-day-cloudy',
  'wi-thunderstorm',
  'wi-snow-wind',
  'wi-thunderstorm',
]

class WeatherImage extends React.Component<{ code: string }> {
  public render() {
    return <i className={`wi ${CodeToIcon[this.props.code]}`} />
  }
}

export default WeatherImage;

import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Weather from './components/Weather';

const cities = ['Lodz', 'Warszawa', 'Berlin', 'New York', 'Londyn'];

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Weather cities={cities} />
      </div>
    );
  }
}

export default App;

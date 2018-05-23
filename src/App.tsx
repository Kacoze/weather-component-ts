import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Weather from './components/Weather';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;

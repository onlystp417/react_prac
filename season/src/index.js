import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );
//   return <div id="app">Latitude: </div>;
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {latitude: 0};

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({latitude: position.coords.latitude}),
      err => this.setState({latitude: err.message})
    );
  }

  render() {
    return <div id="app">Latitude: {this.state.latitude}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
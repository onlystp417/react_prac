import { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // component 第一次渲染在畫面上後的 moment
  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render () {
    return (
      <div>
        <h1>Hello, Jinwen!</h1>
        <FormattedTime date ={this.state.date} />
      </div>
    )
  }
}

function FormattedTime(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export default Clock;
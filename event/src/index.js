import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: true
    }
    
    // 為了讓自定義的 methods 的 this 能夠指向 ccomponent 本身
    this.operator = this.operator.bind(this);
  }

  operator() {
    // 要操作 state 一定要透過 Component 自帶的 setState
    this.setState(state => ({
      switch: !state.switch
    }))
  }

  render() {
    return (
      <section>
        <div>{this.state.switch ? 'on' : 'off'}</div>
        {/* 
          如果要傳第二個參數給 methods 可以這麼做：
          <button onClick={(e) => this.operator(e, id)}>click me</button>
         */}
        <button onClick={this.operator}>click me</button>
      </section>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
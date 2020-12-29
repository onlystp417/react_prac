import React from 'react';

export default class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit = event => {
    event.preventDefault();

    // 觸發父層的自定義事件，就像 Vue emit 的做法
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <label>Search Images</label>
        <input type="text" placeholder="Search..." value={this.state.term} onChange={e => this.setState({ term: e.target.value })}/>
      </form>
    )
  }
}
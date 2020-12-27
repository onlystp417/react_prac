import React from 'react';

export default class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.term);
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
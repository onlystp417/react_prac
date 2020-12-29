import React from 'react';
import axiosAPI from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default class App extends React.Component {
  state = {images: []};
  onSearchSubmit = async (term) => {
    const res = await axiosAPI.get('search/photos', {
      params: {query: term}
    })

    this.setState({images: res.data.results});
  }

  render() {
    return (
      <div className="container">
        {/* 為了達到 pure component 的效果，我們把 callback function 傳入 children */}
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}
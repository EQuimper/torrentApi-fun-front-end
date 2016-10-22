import React, { Component } from 'react';
import TorrentCard from './TorrentCard';
import './categories.css';

class CategoriesView extends Component {
  componentWillMount() {
    this.props.fetchCategorie(this.props.routeState.params);
  }
  render() {
    const { isFetched, categorie, err } = this.props.categories;
    if (!isFetched) {
      return <h1>Loading...</h1>;
    } else if (!err) {
      return (
        <div className="categories-root">
          <div className="categories-container">
            {categorie.torrents.map((torrent, i) => (
              <TorrentCard title={torrent.name} key={i} colorHeader={this.props.routeState.color} />
            ))}
          </div>
        </div>
      );
    }
    return (
      <h1>Error!!!</h1>
    );
  }
}

export default CategoriesView;
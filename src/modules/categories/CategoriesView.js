import React, { Component } from 'react';
import TorrentCard from './TorrentCard';

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
        <div>
          <div>
            {categorie.torrents.map((torrent, i) => (
              <TorrentCard title={torrent.name} key={i} />
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

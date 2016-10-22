import React, { Component } from 'react';
import TorrentCard from './TorrentCard';
import { LoadingScreen } from '../../components';
import './categories.css';

class CategoriesView extends Component {
  componentWillMount() {
    this.props.fetchCategorie(this.props.routeState.params);
  }
  render() {
    const { isFetched, categorie, err } = this.props.categories;
    if (!isFetched) {
      return <LoadingScreen />;
    } else if (!err) {
      return (
        <div className="categories-root">
          <div className="categories-container">
            {categorie.torrents.map((torrent, i) => (
              <TorrentCard
                categorie={this.props.routeState.params}
                seeds={torrent.seeds}
                leeches={torrent.leeches}
                url={torrent.url}
                title={torrent.name}
                colorHeader={this.props.routeState.color}
                key={i}
              />
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

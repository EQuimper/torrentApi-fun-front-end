import React, { Component } from 'react';
import { CategoriesCard } from '../../components';
import './homeview.css';

import settings from '../../../setting';

const catObj = settings.TPB_CATEGORIES;

const HomeView = () => (
  <div className="home-root">
    <div className="home-card-container">
      {Object.keys(catObj).map((cat, i) => (
        <CategoriesCard key={i} title={cat} subCat={catObj[cat]} index={i} />
      ))}
    </div>
  </div>
);

export default HomeView;

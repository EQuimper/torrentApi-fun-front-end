import React from 'react';
import { CategoriesCard } from '../../components';
import './homeview.css';

import settings from '../../../setting';

const catObj = settings.TPB_CATEGORIES;
console.log(catObj);

const HomeView = () => (
  <div className="home-root">
    <div className="home-card-container">
      {Object.keys(catObj).map((cat, i) => (
        <CategoriesCard key={i} title={cat} subCat={catObj[cat]} />
      ))}
    </div>
  </div>
);

export default HomeView;
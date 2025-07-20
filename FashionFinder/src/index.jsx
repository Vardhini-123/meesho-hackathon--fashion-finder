import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import LocationSelect from './components/LocationSelect';
import ShopList from './components/ShopList';
import ProductList from './components/ProductList';

function FashionFinder() {
  return (
    <div>
      <Header activeHeading={6} />
      <Routes>
        <Route path="/" element={<LocationSelect />} />
        <Route path="/shops/:locationId" element={<ShopList />} />
        <Route path="/products/:shopId" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default FashionFinder;

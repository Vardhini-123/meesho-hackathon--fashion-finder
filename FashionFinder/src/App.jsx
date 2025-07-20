import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocationSelect from './components/LocationSelect';
import ShopList from './components/ShopList';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LocationSelect />} />
        <Route path="/fashion-finder/shops/:locationId" element={<ShopList />} />
        <Route path="/fashion-finder/products/:shopId" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;

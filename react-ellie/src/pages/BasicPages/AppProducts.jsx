import React, { useState } from 'react';
import 'pages/BasicPages/css/AppProducts.css';
import Products from 'components/BasicComponents/Proudcts';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <button type="button" onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}

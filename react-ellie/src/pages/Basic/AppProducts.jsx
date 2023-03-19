import React, { useState } from 'react';
import 'pages/Basic/css/AppProducts.css';
import Products from 'components/Basic/Proudcts';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <button type="button" onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}

import Proudcts from 'components/Basic/Proudcts';
import React, { useState } from 'react';

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);
  return (
    <main className="container">
      <div>
        {showLeftProducts && <Proudcts />}
        <button type="button" onClick={() => setShowLeftProducts((show) => !show)}>Toggle</button>
      </div>
      <div>
        {showRightProducts && <Proudcts />}
        <button type="button" onClick={() => setShowRightProducts((show) => !show)}>Toggle</button>
      </div>
    </main>
  );
}

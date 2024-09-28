import { useQueryClient } from '@tanstack/react-query';
import Proudcts from 'components/Query/Proudcts';
import React, { useState } from 'react';

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);
  const client = useQueryClient();
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
      <button type="button" onClick={() => { client.invalidateQueries(['products', false]); }}>
        정보가 업데이트 되었음
      </button>
    </main>
  );
}

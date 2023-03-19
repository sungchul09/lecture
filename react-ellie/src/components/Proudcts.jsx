import React, { useState } from 'react';

export default function Proudcts() {
  const [count, setcount] = useState(0);
  const [products, setProducts] = useState([]);

  return (
    <>
      <ul>
        {
          products.map((product) => (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          ))
        }
      </ul>
      <button type="button" onClick={() => setcount((prev) => prev + 1)}>{count}</button>
    </>
  );
}

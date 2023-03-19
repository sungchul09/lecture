import React, { useEffect, useState } from 'react';

export default function Proudcts() {
  const [count, setcount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('data/products.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('뜨끈한 데이터를 받아옴!');
        setProducts(data);
      });
    return () => {
      console.log('clear');
    };
  }, []);
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

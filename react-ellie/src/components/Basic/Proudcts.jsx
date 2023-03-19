import React, { useEffect, useState } from 'react';

export default function Proudcts() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);
  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('뜨끈한 데이터를 받아옴!');
        setProducts(data);
      });
    return () => {
      console.log('clear');
    };
  }, [checked]);
  return (
    <>
      <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
      <label htmlFor="checkbox">show only hot sale</label>
      <ul>
        {
          products.map((product) => (
            <li key={product.name}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          ))
        }
      </ul>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}

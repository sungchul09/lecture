import Link from 'next/link'
import React from 'react'
import { getProducts } from '../service/products'
import Image from 'next/image'
import ClothesImage from '../../../public/images/clothes.jpeg'


export default async function ProductPage() {
  const products = await getProducts()
  const res = await fetch('https://meowfacts.herokuapp.com')
  const data = await res.json()
  const factText = data.data[0]
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 보여줌
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={ClothesImage} alt="Clothes" />
      <ul>
        {products.map((product, index) => [
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ])}
      </ul>
      <article className='bg-slate-600 p-5 m-5 font-bold text-white'>
        {factText}
      </article>
    </>
  )
}

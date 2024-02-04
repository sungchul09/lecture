// app/products/[slug]/page.tsx

import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'
type Props = {
  params: {
    slug: string;
  }
}

export function generateMetadata({params}: Props) {
    return {
      title: `제품의 이름: ${params.slug}`
    }
}

export default function SkirtsPage({params}: Props) { // props.params
  const products = ['shirts', 'pants', 'skirts', 'shoes']
  if(params.slug === 'nothing') {
    notFound()
  }
  return (
    <>
      <h1>{params.slug} 페이지 입니다.</h1>
      <ul>
        { products.map((product, index) => <li key={index}>
          <Link href={`/products/${product}`}>{product}</Link>
        </li>)}
      </ul>
    </>
  )
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map(product => ({
    slug: product
  }))
}
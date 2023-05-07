import { getProducts, getProductt } from '@/service/products';
import { notFound } from 'next/navigation';
import React from 'react'
type Props = {
  params: {
    slug: string;
  }
}

export function generateMetadata({params}: Props) {
  return {
    title: `제품 이름: ${params.slug}`
  }
}

export default function SkirtsPage({params: {slug}}: Props) { // props.params
  const product = getProductt(slug)
  if(!product) {
    notFound()
  }
  return (
    <h1>{product} 제품 설명 페이지</h1>
  )
}

export function generateStaticParams() {
  const products = getProducts()
  return products.map(product => ({
    slug: product
  }))
}
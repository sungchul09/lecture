import { notFound } from 'next/navigation';
import React from 'react'
type Props = {
  params: {
    slug: string;
  }
}
export default function SkirtsPage({params}: Props) { // props.params
  if(params.slug === 'nothing') {
    notFound()
  }
  return (
    <h1>{params.slug} 페이지 입니다.</h1>
  )
}

export function generateStaticParams() {
  const products = ['pants', 'skirts'];
  return products.map(product => ({
    slug: product
  }))
}
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 확인해보세요'
}

export default function ProductsLayout({ children }: 
  Readonly<{
    children: React.ReactNode
  }>) {
  return (
    <div>
      <header className='flex justify-between p-5 bg-slate-100'>
        <h2>Product layout</h2>
        <nav className='flex justify-between gap-5'>
          <Link href="/products/girl">girl</Link>
          <Link href="/products/boy">boy</Link>
        </nav>
      </header>
      <section>
        {children}
      </section>
    </div>
  )
}

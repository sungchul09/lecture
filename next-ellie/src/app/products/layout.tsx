import { Metadata } from 'next'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 확인해보세요.',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className={styles.nav}>
          <a href="/products/woman">여성옷</a>
          <a href="/products/man">남성옷</a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  )
}

import styles from './layout.module.css'

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

import styles from './Header.module.css'

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <h1 className={styles['header-logo']}>Seongcheol Blog</h1>
      <div className={styles['header-menu']}>
        <div className={styles['header-menu__home']}>home</div>
        <div className={styles['header-menu__about']}>about</div>
        <div className={styles['header-menu__posts']}>posts</div>
        <div className={styles['header-menu__contact']}>contact</div>
      </div>
    </header>
  )
}

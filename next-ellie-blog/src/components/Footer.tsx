import styles from './Footer.module.css'

export default function HeaderComponent() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>github</div>
    </footer>
  )
}

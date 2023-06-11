import styles from './Navigation.module.css'

export default function NavigationComponent() {
  return (
    <div className={styles.navigation}>
      <img className={styles['navigation-image']} src="/profile.jpg" alt="profile-image" />
      <p className={styles['navigation-title']}>Seongcheol.yun</p>
      <p className={styles['navigation-subtitle']}>Frontend developer</p>
      <p className={styles['navigation-text']}>안녕하세요 프론트엔드 개발자입니다.</p>
      <button className={styles['navigation-contact']}>Contact Me</button>
    </div>
  )
}

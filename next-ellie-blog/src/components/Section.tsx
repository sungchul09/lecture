import React from 'react'
import styles from '@components/Section.module.css'

export default function SectionComponent() {
  const posts = [
    {
      title: '2023년 리뷰',
      text: '2023년 한 해 동안 배운 기술들, 생각들 정리',
      tag: 'my story',
      image: 'reveiw.png',
      date: '2023-12-31',
    },
    {
      title: 'react 18 version 출시',
      text: '리액티 18에 추가된 사항들 정리',
      tag: 'frontend',
      image: 'react.png',
      date: '2023-05-02',
    },
    {
      title: '리액트 best practice!',
      text: '리액트를 정확하게 사용하는 방법들을 정리',
      tag: 'frontend',
      image: 'practice.png',
      date: '2023-04-15',
    },
    {
      title: '자바스크립트 10가지 프로팁!',
      text: '프로처럼 자바스크립트 사용할 수 있는 10가지 팁!',
      tag: 'javascript',
      image: '자바스크립트.png',
      date: '2022-06-15',
    },
    {
      title: '자바스크립트 10가지 프로팁!',
      text: '프로처럼 자바스크립트 사용할 수 있는 10가지 팁!',
      tag: 'javascript',
      image: '자바스크립트.png',
      date: '2022-06-15',
    },
    {
      title: '자바스크립트 10가지 프로팁!',
      text: '프로처럼 자바스크립트 사용할 수 있는 10가지 팁!',
      tag: 'javascript',
      image: '자바스크립트.png',
      date: '2022-06-15',
    },
    {
      title: '자바스크립트 10가지 프로팁!',
      text: '프로처럼 자바스크립트 사용할 수 있는 10가지 팁!',
      tag: 'javascript',
      image: '자바스크립트.png',
      date: '2022-06-15',
    },
    {
      title: '자바스크립트 10가지 프로팁!',
      text: '프로처럼 자바스크립트 사용할 수 있는 10가지 팁!',
      tag: 'javascript',
      image: '자바스크립트.png',
      date: '2022-06-15',
    },
  ]
  return (
    <div className={styles.section}>
      <div className={styles['featured-post']}>Featured Post</div>
      <div className={styles['featured-post__items']}>
        {posts.map(v => {
          return (
            <div className={styles['featured-post__item']} key={v.title}>
              <div className={styles['featured-post__item-image']}>{v.image}</div>
              <div className={styles['featured-post__item-date']}>{v.date}</div>
              <div className={styles['featured-post__item-content']}>
                <div className={styles['featured-post__item-content-title']}>{v.title}</div>
                <div className={styles['featured-post__item-content-text']}>{v.text}</div>
                <div className={styles['featured-post__item-content-tag']}>{v.tag}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

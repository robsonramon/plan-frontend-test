'use client'
import React from 'react'

import Image from 'next/image'

import styles from './Home.module.scss'

export default function Home() {
  return (
    <main className={styles.content}>
      <Image
        src="/img/logo.png"
        alt="Plan Marketing logo"
        width={200}
        height={200}
        priority
      />

      <h1 className={styles.title}>Countries</h1>
    </main>
  )
}

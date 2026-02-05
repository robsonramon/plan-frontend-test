'use client'
import React from 'react'

import Image from 'next/image'

import styles from './Footer.module.scss'

export function Footer() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          src="/img/LOGO-GRUPO.webp"
          alt="Logo"
          width={108}
          height={5}
          priority
        />

        <p>Grupo Plan Marketing (C) Todos os direitos reservados - 2025</p>
      </div>
    </header>
  )
}

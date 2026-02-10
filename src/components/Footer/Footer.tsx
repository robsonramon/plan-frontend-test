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
          width={126}
          height={92}
          priority
        />

        <p>Grupo Plan Marketing (C) Todos os direitos reservados - 2026</p>
      </div>
    </header>
  )
}

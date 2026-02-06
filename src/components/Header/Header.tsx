'use client'
import React from 'react'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import styles from './Header.module.scss'

const CONTINENTS = [
  'Africa',
  'Asia',
  'Europe',
  'North America',
  'South America',
  'Oceania',
]

const LANGUAGES = ['Português', 'Inglês', 'Espanhol', 'Francês', 'Alemão']

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          src="/img/LOGO.webp"
          alt="Logo"
          width={108}
          height={5}
          priority
        />
        {isHome && (
          <div className={styles.filters}>
            <div className={styles.inputs}>
              <input
                type="text"
                placeholder="Informe o país que deseja conhecer..."
                className={styles.input}
              />

              <select className={styles.select}>
                <option value="">Selecione o idioma</option>
                {LANGUAGES.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.checkboxes}>
              {CONTINENTS.map((continent) => (
                <label key={continent} className={styles.checkbox}>
                  <input type="checkbox" value={continent} />
                  <span>{continent}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

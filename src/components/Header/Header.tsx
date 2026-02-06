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

type HeaderProps = {
  search: string
  language: string
  languageOptions: string[]
  continents: string[]
  onSearchChange: (value: string) => void
  onLanguageChange: (value: string) => void
  onContinentChange: (values: string[]) => void
}

export function Header({
  search,
  language,
  languageOptions,
  continents,
  onSearchChange,
  onLanguageChange,
  onContinentChange,
}: HeaderProps) {
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
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Informe o país que deseja conhecer..."
                className={styles.input}
              />

              <select
                className={styles.select}
                value={language}
                onChange={(e) => onLanguageChange(e.target.value)}>
                <option value="">Selecione o idioma</option>
                {languageOptions.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.checkboxes}>
              {CONTINENTS.map((continent) => (
                <label key={continent} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={continents.includes(continent)}
                    onChange={(e) => {
                      const updated = e.target.checked
                        ? [...continents, continent]
                        : continents.filter((c) => c !== continent)

                      onContinentChange(updated)
                    }}
                  />
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

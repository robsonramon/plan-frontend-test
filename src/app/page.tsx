'use client'

import React from 'react'

import { CountryCard } from '@/components/CountryCard/CountryCard'
import { CountryCardData } from '@/types/country'

import styles from './Home.module.scss'

const mockCountries: CountryCardData[] = [
  {
    code: 'DEU',
    name: 'Alemanha',
    capital: 'Berlim',
    continent: 'Europe',
    flag: 'https://flagcdn.com/w320/de.png',
  },
  {
    code: 'BRA',
    name: 'Brasil',
    capital: 'Brasília',
    continent: 'South America',
    flag: 'https://flagcdn.com/w320/br.png',
  },
  {
    code: 'USA',
    name: 'Estados Unidos',
    capital: 'Washington, D.C.',
    continent: 'North America',
    flag: 'https://flagcdn.com/w320/us.png',
  },
  {
    code: 'ZAF',
    name: 'África do Sul',
    capital: 'Pretória',
    continent: 'Africa',
    flag: 'https://flagcdn.com/w320/za.png',
  },
  {
    code: 'JPN',
    name: 'Japão',
    capital: 'Tóquio',
    continent: 'Asia',
    flag: 'https://flagcdn.com/w320/jp.png',
  },
  {
    code: 'AUS',
    name: 'Austrália',
    capital: 'Camberra',
    continent: 'Oceania',
    flag: 'https://flagcdn.com/w320/au.png',
  },
  {
    code: 'FRA',
    name: 'França',
    capital: 'Paris',
    continent: 'Europe',
    flag: 'https://flagcdn.com/w320/fr.png',
  },
  {
    code: 'ARG',
    name: 'Argentina',
    capital: 'Buenos Aires',
    continent: 'South America',
    flag: 'https://flagcdn.com/w320/ar.png',
  },
]

export default function Home() {
  return (
    <main className={styles.content}>
      <div className={styles.grid}>
        {mockCountries.map((country) => (
          <CountryCard key={country.code} country={country} />
        ))}
      </div>
    </main>
  )
}

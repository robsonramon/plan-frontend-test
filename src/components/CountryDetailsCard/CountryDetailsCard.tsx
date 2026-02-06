'use client'

import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { CountryDetailsData } from '@/types/country'

import styles from './CountryDetailsCard.module.scss'

type CountryCardProps = {
  country: CountryDetailsData
}

export function CountryDetailsCard({ country }: CountryCardProps) {
  const router = useRouter()
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.continent}>{country.region}</span>

        <Image
          src={`/img/${country.region.toLowerCase().replace(' ', '')}.webp`}
          alt={country.region}
          width={32}
          height={32}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.flagWrapper}>
          <Image
            src={country.flag}
            alt={`Flag of ${country.name}`}
            width={290}
            height={220}
            className={styles.flag}
          />
          <p>Bandeira</p>
        </div>
        <div>
          <ul className={styles.list}>
            <h1 className={styles.countryName}>{country.name}</h1>
            <li>
              <span>Nome oficial:</span> <strong>{country.officialName}</strong>
            </li>
            <li>
              <span>Capital:</span> <strong>{country.capital}</strong>
            </li>
            <li>
              <span>População:</span>
              <strong>{country.population.toLocaleString('pt-BR')}</strong>
            </li>
            <li>
              <span>Moeda:</span>{' '}
              <strong>{country.currencies.join(', ')}</strong>
            </li>
            <li>
              <span>Idiomas:</span>{' '}
              <strong>{country.languages.join(', ')}</strong>
            </li>
            <li>
              <span>Região:</span> <strong>{country.region}</strong>
            </li>
            {country.subregion && (
              <li>
                <span>Sub-Região:</span> <strong>{country.subregion}</strong>
              </li>
            )}
            <button
              className={styles.backButton}
              onClick={() => router.push('/')}>
              Voltar
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

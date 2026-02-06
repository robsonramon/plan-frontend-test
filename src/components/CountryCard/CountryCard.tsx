'use client'

import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { CountryCardData } from '@/types/country'

import styles from './CountryCard.module.scss'

type CountryCardProps = {
  country: CountryCardData
}

export function CountryCard({ country }: CountryCardProps) {
  const router = useRouter()
  const handleViewMore = () => {
    router.push(
      `country/${country.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')}-${country.code}`,
    )
  }

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
        <Image
          src={country.flag}
          alt={`Flag of ${country.name}`}
          width={24}
          height={18}
          className={styles.flag}
        />

        <h2 className={styles.countryName}>{country.name}</h2>
        <div className={styles.capitalInfo}>
          <Image
            src={'/img/capital-icon.webp'}
            alt={country.region}
            width={20}
            height={20}
          />
          <p className={styles.capital}>{country.capital}</p>
        </div>

        <button className={styles.button} onClick={handleViewMore}>
          Ver mais
        </button>
      </div>
    </div>
  )
}

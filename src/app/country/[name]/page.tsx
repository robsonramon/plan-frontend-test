'use client'

import React from 'react'

import Image from 'next/image'

import { CountryDetailsCard } from '@/components/CountryDetailsCard/CountryDetailsCard'
import { useCountryDetails } from '@/hooks/useCountryDetails'

import styles from './Country.module.scss'

export default function CountryPage() {
  const { country, loading, error } = useCountryDetails()

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Carregando país…</p>
  }

  if (error || !country) {
    return <p style={{ textAlign: 'center' }}>País não encontrado.</p>
  }

  return (
    <div className={styles.container}>
      <Image src="/img/LOGO.webp" alt="Logo" width={108} height={75} priority />
      <CountryDetailsCard country={country} />
    </div>
  )
}

'use client'

import React from 'react'

import Image from 'next/image'

import { CountryDetailsCard } from '@/components/CountryDetailsCard/CountryDetailsCard'
import { Error } from '@/components/Error/Error'
import { Loading } from '@/components/Loading/Loading'
import { useCountryDetails } from '@/hooks/useCountryDetails'

import styles from './Country.module.scss'

export default function CountryPage() {
  const { country, loading, error } = useCountryDetails()

  return (
    <div className={styles.container}>
      <Image src="/img/LOGO.webp" alt="Logo" width={108} height={75} priority />
      {loading && <Loading message="Carregando país..." />}

      {error && (
        <Error
          message="Erro ao carregar país."
          onRetry={() => window.location.reload()}
        />
      )}
      {!loading && !error && country && (
        <CountryDetailsCard country={country} />
      )}
    </div>
  )
}

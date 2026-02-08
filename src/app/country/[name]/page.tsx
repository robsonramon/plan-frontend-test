'use client'

import React, { useEffect, useState } from 'react'

import Image from 'next/image'

import { CountryDetailsCard } from '@/components/CountryDetailsCard/CountryDetailsCard'
import { getCountryBySlug } from '@/services/restCountries'
import { CountryDetailsData } from '@/types/country'

import styles from './Country.module.scss'

export default function CountryPage({ params }: { params: { name: string } }) {
  const [country, setCountry] = useState<CountryDetailsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadCountry() {
      try {
        const data = await getCountryBySlug(params.name)
        setCountry(data)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadCountry()
  }, [params.name])

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Carregando país…</p>
  }

  if (error || !country) {
    return <p style={{ textAlign: 'center' }}>País não encontrado.</p>
  }

  return (
    <div className={styles.container}>
      <Image src="/img/LOGO.webp" alt="Logo" width={108} height={5} priority />
      <CountryDetailsCard country={country} />
    </div>
  )
}

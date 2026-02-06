'use client'

import React, { useEffect, useState } from 'react'

import { CountryCard } from '@/components/CountryCard/CountryCard'
import { Pagination } from '@/components/Pagination/Pagination'
import { getCountries } from '@/services/restCountries'
import { CountryCardData } from '@/types/country'

import styles from './Home.module.scss'

const ITEMS_PER_PAGE = 8

export default function Home() {
  const [countries, setCountries] = useState<CountryCardData[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadCountries() {
      try {
        const data = await getCountries()
        setCountries(data)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadCountries()
  }, [])

  const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE

  const paginatedCountries = countries.slice(startIndex, endIndex)

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Carregando países...</p>
  }

  if (error) {
    return <p style={{ textAlign: 'center' }}>Erro ao carregar países.</p>
  }

  return (
    <main className={styles.content}>
      <div className={styles.grid}>
        {paginatedCountries.slice(0, 8).map((country) => (
          <CountryCard key={country.code} country={country} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  )
}

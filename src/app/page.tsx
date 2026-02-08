'use client'

import React, { useEffect, useState } from 'react'

import { CountryCard } from '@/components/CountryCard/CountryCard'
import { Header } from '@/components/Header/Header'
import { Pagination } from '@/components/Pagination/Pagination'
import { useItemsPerPage } from '@/hooks/useItemsPerPage'
import { getCountries } from '@/services/restCountries'
import { CountryCardData } from '@/types/country'
import { Filters } from '@/types/filters'

import styles from './Home.module.scss'

export default function Home() {
  const [countries, setCountries] = useState<CountryCardData[]>([])
  const [filters, setFilters] = useState<Filters>({
    search: '',
    language: '',
    continents: [],
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const itemsPerPage = useItemsPerPage()

  function handleFilterChange(key: keyof Filters, value: string | string[]) {
    setCurrentPage(1)
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  useEffect(() => {
    async function loadCountries() {
      try {
        const data = await getCountries(filters.language || undefined)
        setCountries(data)
        setCurrentPage(1)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadCountries()
  }, [filters.language])

  useEffect(() => {
    setCurrentPage(1)
  }, [itemsPerPage])

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(filters.search.toLowerCase())

    const matchesContinent =
      filters.continents.length > 0
        ? filters.continents.includes(country.region)
        : true

    return matchesSearch && matchesContinent
  })

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const paginatedCountries = filteredCountries.slice(startIndex, endIndex)
  const languageOptions = Array.from(
    new Set(countries.flatMap((c) => c.languages)),
  ).sort()

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Carregando países...</p>
  }

  if (error) {
    return <p style={{ textAlign: 'center' }}>Erro ao carregar países.</p>
  }

  return (
    <main className={styles.content}>
      <Header
        search={filters.search}
        language={filters.language}
        continents={filters.continents}
        languageOptions={languageOptions}
        onSearchChange={(value) => handleFilterChange('search', value)}
        onLanguageChange={(value) => handleFilterChange('language', value)}
        onContinentChange={(values) => handleFilterChange('continents', values)}
      />

      <div className={styles.grid}>
        {paginatedCountries.map((country) => (
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

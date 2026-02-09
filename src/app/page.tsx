'use client'

import React from 'react'

import { CountryCard } from '@/components/CountryCard/CountryCard'
import { Error } from '@/components/Error/Error'
import { Header } from '@/components/Header/Header'
import { Loading } from '@/components/Loading/Loading'
import { Pagination } from '@/components/Pagination/Pagination'
import { useCountries } from '@/hooks/useCountries'
import { useCountryFilters } from '@/hooks/useFilters'
import { useItemsPerPage } from '@/hooks/useItemsPerPage'
import { usePagination } from '@/hooks/usePagination'

import styles from './Home.module.scss'

export default function Home() {
  const { countries, loading, error } = useCountries()

  const {
    search,
    setSearch,
    language,
    setLanguage,
    continents,
    setContinents,
    filteredCountries,
  } = useCountryFilters(countries)

  const itemsPerPage = useItemsPerPage()

  const { currentPage, setCurrentPage, totalPages, paginatedItems } =
    usePagination(filteredCountries, itemsPerPage)

  const languageOptions = React.useMemo(() => {
    return Array.from(new Set(countries.flatMap((c) => c.languages))).sort()
  }, [countries])

  return (
    <main className={styles.content}>
      <Header
        search={search}
        language={language}
        continents={continents}
        languageOptions={languageOptions}
        onSearchChange={setSearch}
        onLanguageChange={setLanguage}
        onContinentChange={setContinents}
      />

      {loading && <Loading message="Carregando país..." />}

      {error && (
        <Error
          message="Erro ao carregar país."
          onRetry={() => window.location.reload()}
        />
      )}
      {!loading && !error && (
        <>
          <div className={styles.grid}>
            {paginatedItems.map((country) => (
              <CountryCard key={country.code} country={country} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </main>
  )
}

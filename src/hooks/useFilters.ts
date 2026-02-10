'use client'

import { useState } from 'react'

import { CountryCardData } from '@/types/country'

export function useCountryFilters(countries: CountryCardData[]) {
  const [search, setSearch] = useState('')
  const [language, setLanguage] = useState('')
  const [continents, setContinents] = useState<string[]>([])

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesContinent =
      continents.length === 0 ||
      continents.some(
        (continent) =>
          country.region === continent || country.subregion === continent,
      )

    const matchesLanguage = !language || country.languages.includes(language)

    return matchesSearch && matchesContinent && matchesLanguage
  })

  return {
    search,
    setSearch,
    language,
    setLanguage,
    continents,
    setContinents,
    filteredCountries,
  }
}

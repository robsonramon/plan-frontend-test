'use client'

import { useEffect, useState } from 'react'

import { getCountries } from '@/services/restCountries'
import { CountryCardData } from '@/types/country'

export function useCountries() {
  const [countries, setCountries] = useState<CountryCardData[]>([])
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

  return { countries, loading, error }
}

'use client'

import { useEffect, useState } from 'react'

import { useParams } from 'next/navigation'

import { getCountryBySlug } from '@/services/restCountries'
import { CountryDetailsData } from '@/types/country'

export function useCountryDetails() {
  const params = useParams<{ name: string }>()

  const [country, setCountry] = useState<CountryDetailsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadCountry() {
      try {
        setLoading(true)
        const data = await getCountryBySlug(params.name)
        setCountry(data)
        setError(false)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    if (params.name) {
      loadCountry()
    }
  }, [params.name])

  return { country, loading, error }
}

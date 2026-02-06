import { CountryCardData } from '@/types/country'

export async function getCountries(): Promise<CountryCardData[]> {
  const response = await fetch('/api/countries')

  if (!response.ok) {
    throw new Error('Failed to fetch countries')
  }

  return response.json()
}

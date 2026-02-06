import { CountryCardData } from '@/types/country'
import { CountryDetailsData } from '@/types/country'

export async function getCountries(lang?: string): Promise<CountryCardData[]> {
  const url = lang ? `/api/countries?lang=${lang}` : '/api/countries'

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch countries')
  }

  return response.json()
}

export async function getCountryBySlug(
  slug: string,
): Promise<CountryDetailsData> {
  const response = await fetch(`/api/countries/${slug}`)

  if (!response.ok) {
    throw new Error('Failed to fetch country details')
  }

  return response.json()
}

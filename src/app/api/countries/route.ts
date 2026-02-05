import { NextResponse } from 'next/server'

const COUNTRIES_API_URL =
  'https://restcountries.com/v3.1/all?fields=cca3,name,translations,capital,region,flags'

export async function GET() {
  const response = await fetch(COUNTRIES_API_URL, {
    next: { revalidate: 60 * 60 * 24 },
  })

  const data = await response.json()

  if (!Array.isArray(data) || data.length === 0) {
    return NextResponse.json({ message: 'Country not found' }, { status: 404 })
  }

  const countries = data.map((country: any) => ({
    code: country.cca3,
    name:
      country.translations?.por?.common ?? country.name?.common ?? 'Unknown',
    capital: country.capital?.[0] ?? '—',
    region: country.region,
    flag: country.flags?.svg ?? country.flags?.png,
  }))

  return NextResponse.json(countries)
}

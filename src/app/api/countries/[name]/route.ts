import { NextResponse } from 'next/server'

type Params = {
  params: {
    name: string
  }
}

export async function GET(_: Request, { params }: Params) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${params.name}`,
    {
      next: { revalidate: 60 * 60 * 24 },
    },
  )

  const data = await response.json()

  if (!Array.isArray(data) || data.length === 0) {
    return NextResponse.json({ message: 'Country not found' }, { status: 404 })
  }

  const country = data[0]

  const normalizedCountry = {
    code: country.cca3,
    name:
      country.translations?.por?.common ?? country.name?.common ?? 'Unknown',
    officialName: country.translations?.por?.official ?? country.name?.official,
    capital: country.capital?.[0] ?? '—',
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    languages: Object.values(country.languages ?? {}),
    currencies: Object.values(country.currencies ?? {}).map(
      (currency: any) => currency.name,
    ),
    flag: country.flags?.svg ?? country.flags?.png,
  }

  return NextResponse.json(normalizedCountry)
}

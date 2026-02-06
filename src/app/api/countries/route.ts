import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang')

  const baseUrl = lang
    ? `https://restcountries.com/v3.1/lang/${lang}?fields=cca3,name,translations,capital,region,flags,languages`
    : 'https://restcountries.com/v3.1/all?fields=cca3,name,translations,capital,region,flags,languages'

  const response = await fetch(baseUrl, {
    next: { revalidate: 60 * 60 * 24 },
  })

  const data = await response.json()

  if (!Array.isArray(data) || data.length === 0) {
    return NextResponse.json([], { status: 200 })
  }

  const countries = data.map((country: any) => ({
    code: country.cca3,
    name:
      country.translations?.por?.common ?? country.name?.common ?? 'Unknown',
    capital: country.capital?.[0] ?? '—',
    region: country.region,
    flag: country.flags,
    languages: country.languages ? Object.values(country.languages) : [],
  }))

  return NextResponse.json(countries)
}

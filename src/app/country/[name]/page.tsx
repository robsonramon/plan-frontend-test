import React from 'react'

import { CountryDetailsCard } from '@/components/CountryDetailsCard/CountryDetailsCard'
import { CountryDetailsData } from '@/types/country'

const mockCountry: CountryDetailsData = {
  code: 'DEU',
  name: 'Alemanha',
  officialName: 'República Federal da Alemanha',
  capital: 'Berlim',
  population: 83491249,
  currencies: ['Euro'],
  languages: ['Alemão'],
  region: 'Europe',
  subregion: 'Europa Ocidental',
  flag: 'https://flagcdn.com/w320/de.png',
}

export default function CountryPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <CountryDetailsCard country={mockCountry} />
    </div>
  )
}

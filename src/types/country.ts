export type Continent =
  | 'Africa'
  | 'Asia'
  | 'Europe'
  | 'North America'
  | 'South America'
  | 'Oceania'

export interface CountryCardData {
  code: string
  name: string
  capital: string
  continent: Continent
  flag: string
}

export interface CountryDetailsData {
  code: string
  name: string
  officialName: string
  capital: string
  population: number
  currencies: string[]
  languages: string[]
  region: string
  subregion?: string
  flag: string
}

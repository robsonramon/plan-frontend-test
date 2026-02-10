export type Continent =
  | 'Africa'
  | 'Asia'
  | 'Europe'
  | 'North America'
  | 'South America'
  | 'Oceania'

export type CountryFlag = {
  svg: string
  png: string
  alt: string
}

export interface CountryCardData {
  code: string
  name: string
  capital: string
  region: Continent
  subregion?: string | null
  flag: CountryFlag
  languages: string[]
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
  flag: CountryFlag
}

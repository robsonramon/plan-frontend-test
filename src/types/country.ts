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

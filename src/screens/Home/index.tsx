/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import {
  AnimalsContainer,
  Filter,
  FilterContainer,
  FilterText,
  FilterTitle,
  HomeContainer,
  HomeTitle,
} from './styles'
import { api } from '../../lib/axios'
import { Animal } from './components/Animal'

export interface IAnimal {
  id: number
  type: string
  price: number
}

export function Home() {
  const [animals, setAnimals] = useState<IAnimal[] | null>([])
  const [activeFilter, setActiveFilter] = useState<string | undefined>()

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/')

      setAnimals(response.data)
    }

    fetchData()
  }, [])

  function handleSetActiveFilter(filter: string) {
    setActiveFilter(filter)
  }

  useEffect(() => {
    if (animals && activeFilter) {
      const sortedAnimals: IAnimal[] = [...animals]

      if (activeFilter === 'id' || activeFilter === undefined) {
        sortedAnimals.sort((a, b) => a.id - b.id)
      } else if (activeFilter === 'price') {
        sortedAnimals.sort((a, b) => a.price - b.price)
      } else if (activeFilter === 'type') {
        sortedAnimals.sort((a, b) => a.type.localeCompare(b.type))
      }

      setAnimals([...sortedAnimals])
    }
  }, [activeFilter])

  return (
    <HomeContainer>
      <HomeTitle>Catalog</HomeTitle>
      <FilterTitle>Sort by:</FilterTitle>
      <FilterContainer>
        <Filter
          activeOpacity={0.8}
          onPress={() => handleSetActiveFilter('id')}
          isActive={activeFilter === 'id'}
        >
          <FilterText>Id</FilterText>
        </Filter>
        <Filter
          activeOpacity={0.8}
          onPress={() => handleSetActiveFilter('type')}
          isActive={activeFilter === 'type'}
        >
          <FilterText>Type</FilterText>
        </Filter>
        <Filter
          activeOpacity={0.8}
          onPress={() => handleSetActiveFilter('price')}
          isActive={activeFilter === 'price'}
        >
          <FilterText>Price</FilterText>
        </Filter>
      </FilterContainer>

      <AnimalsContainer showsVerticalScrollIndicator={false}>
        {animals &&
          animals.map((animal) => <Animal key={animal.id} data={animal} />)}
      </AnimalsContainer>
    </HomeContainer>
  )
}

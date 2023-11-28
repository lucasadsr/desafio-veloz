/* eslint-disable @typescript-eslint/no-var-requires */
import { IAnimal } from '../..'
import {
  AnimalContainer,
  AnimalText,
  Price,
  TextAndPriceContainer,
} from './styles'
import { Image } from 'react-native'

interface AnimalProps {
  data: IAnimal
}

export function Animal({ data }: AnimalProps) {
  const dogImage = require('../../../../../assets/dog.jpg')
  const catImage = require('../../../../../assets/cat.jpg')
  const fishImage = require('../../../../../assets/fish.jpg')

  const selectImage = () => {
    if (data.type === 'dog') {
      return dogImage
    } else if (data.type === 'cat') {
      return catImage
    } else {
      return fishImage
    }
  }

  const formattedPrice = data.price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <AnimalContainer>
      <Image
        source={selectImage()}
        alt={data.type}
        resizeMode="cover"
        style={{ width: '100%', height: '75%', borderRadius: 8 }}
      />
      <TextAndPriceContainer>
        <AnimalText>{data.type}</AnimalText>
        <Price>{formattedPrice}</Price>
      </TextAndPriceContainer>
    </AnimalContainer>
  )
}

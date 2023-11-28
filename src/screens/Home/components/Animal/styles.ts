import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const AnimalContainer = styled.View`
  background-color: white;
  width: 100%;
  height: 320px;
  border-radius: 18px;
  padding: 12px;
  margin-bottom: 12px;

  ${Platform.select({
    ios: `
      shadow-color: black;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.3;
      shadow-radius: 4px;
    `,
    android: `
      elevation: 4;
    `,
  })}
`

export const TextAndPriceContainer = styled.View`
  margin-top: 8px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export const AnimalText = styled.Text`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 500;
`

export const Price = styled.Text`
  color: #e8be13;
  font-weight: 700;
  font-size: 20px;
`

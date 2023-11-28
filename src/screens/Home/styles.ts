import styled, { css } from 'styled-components/native'
import { Platform } from 'react-native'

export const HomeContainer = styled.SafeAreaView`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 48px 16px 0px;
  background-color: #e0f2f7;
`

export const HomeTitle = styled.Text`
  font-size: 28px;
`

export const FilterContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  margin-bottom: 12px;
`

export const FilterTitle = styled.Text`
  font-size: 28px;
  font-weight: 500;
  width: 100%;
  margin-top: 22px;
  margin-bottom: 8px;
`

export const Filter = styled.TouchableOpacity<{ isActive: boolean }>`
  padding: 12px;
  border-radius: 12px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  ${(props) =>
    props.isActive &&
    css`
      background-color: #ffa500;
    `}

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

export const FilterText = styled.Text`
  font-weight: 500;
`

export const AnimalsContainer = styled.ScrollView`
  width: 100%;
`

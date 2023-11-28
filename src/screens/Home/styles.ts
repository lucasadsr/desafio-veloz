import styled, { css } from 'styled-components/native'
import { Platform } from 'react-native'

export const HomeContainer = styled.SafeAreaView`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 48px 16px 0px;
  background-color: #f2f2f0;
`

export const HomeTitle = styled.Text`
  font-size: 28px;
  color: #3f3e3f;
  font-weight: 600;
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
  width: 100%;
  margin-top: 22px;
  margin-bottom: 8px;
  color: #3f3e3f;
`

export const Filter = styled.TouchableOpacity<{ isActive: boolean }>`
  padding: 12px;
  border-radius: 16px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.08);

  ${(props) =>
    props.isActive &&
    css`
      background-color: #ff9934;
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

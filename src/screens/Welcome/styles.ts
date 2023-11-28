import { ImageBackground, TouchableOpacity, Platform } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ImageBackgroundContainer = styled(ImageBackground)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const WelcomeContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  bottom: 0;
  width: 100%;
  height: 180px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  background-color: white;
`

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
  color: #1c1e21;
`

export const ButtonContainer = styled(TouchableOpacity)`
  padding: 16px 18px;
  border-radius: 20px;
  background-color: #2cbbc3;
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

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: white;
`

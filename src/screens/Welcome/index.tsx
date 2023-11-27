import {
  ButtonContainer,
  ButtonText,
  Container,
  ImageBackgroundContainer,
  Title,
  WelcomeContainer,
} from './styles'

import { useNavigation } from '@react-navigation/native'

export function Welcome() {
  const navigation = useNavigation()

  return (
    <Container>
      <ImageBackgroundContainer
        source={require('../../../assets/coverImage.jpg')}
        resizeMode="cover"
        style={{ width: '100%' }}
      >
        <WelcomeContainer>
          <Title>Bem-vindo(a) ao Pet Store</Title>
          <ButtonContainer
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Home' as never)}
          >
            <ButtonText>Encontrar novo Pet!</ButtonText>
          </ButtonContainer>
        </WelcomeContainer>
      </ImageBackgroundContainer>
    </Container>
  )
}

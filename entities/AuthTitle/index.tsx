import { useFonts, Exo2_700Bold } from '@expo-google-fonts/exo-2'
import { blueColor } from '@shared/cssConstants'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components'

const Title = styled(Text)`
  color: ${blueColor};
  font-size: 24px;
  font-weight: 900;
  font-family: Exo2_700Bold;
`
const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const AuthTitle = () => {
  const [fontsLoaded] = useFonts({
    Exo2_700Bold
  })
  if (!fontsLoaded) {
    return null
  }
  return (
    <Wrapper>
      <Image
        source={require('@shared/assets/logo.png')}
        style={{ width: 150, height: 150 }}
      />
      <Title>HIGH MAX</Title>
      <Title>ТЕСТОВОЕ ЗАДАНИЕ</Title>
    </Wrapper>
  )
}

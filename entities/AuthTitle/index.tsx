import { blueColor } from '@shared/cssConstants'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components'

const Title = styled(Text)`
  color: ${blueColor};
  font-size: 24px;
  font-weight: 900;
  font-family: 'Exo2_900Black_Italic';
`
const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const AuthTitle = () => {
  return (
    <Wrapper>
      {/* <Image
        source={require("@assets/logo.png")}
        style={{ width: 100, height: 100 }}
      /> */}
      <Title>HIGH MAX</Title>
      <Title>ТЕСТОВОЕ ЗАДАНИЕ</Title>
    </Wrapper>
  )
}

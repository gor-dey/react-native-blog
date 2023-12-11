import { AuthTitle } from '@entities'
import { defaultPadding, redColor } from '@shared/cssConstants'
import { AuthWidget } from '@widgets'
import { View } from 'react-native'
import styled from 'styled-components'

const Wrapper = styled(View)`
  background-color: ${redColor};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  padding: ${defaultPadding};
`

export const AuthPage = () => {
  return (
    <Wrapper>
      <AuthTitle />
      <AuthWidget />
    </Wrapper>
  )
}

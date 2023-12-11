import { View, Text } from 'react-native'
import styled from 'styled-components'

export const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
export const AuthorName = styled(Text)`
  font-size: 16px;
  font-weight: 700;
`

import { yellowColor } from '@shared/cssConstants'
import { Text } from 'react-native'
import styled from 'styled-components'

const Star = styled(Text)`
  color: ${yellowColor};
  font-size: 30px;
`

export const StarElement = () => {
  return <Star>★</Star>
}

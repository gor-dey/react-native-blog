import { defaultPadding } from '@shared/cssConstants'
import { Text, View } from 'react-native'
import styled from 'styled-components'

export const Title = styled(Text)`
  font-size: 24px;
  font-weight: 700;
`
export const PostWrapper = styled(View)`
  padding-left: ${defaultPadding};
  padding-right: ${defaultPadding};
`

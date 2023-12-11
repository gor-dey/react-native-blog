import { grayColor } from '@shared/cssConstants'
import { View, Text } from 'react-native'
import styled from 'styled-components'

export const Title = styled(Text)`
  font-weight: 700;
  font-weight: 700;
  font-size: 16px;
`
export const MainText = styled(Text)`
  font-size: 16px;
  font-weight: 400;
`
export const CommentWrapper = styled(View)`
  border-bottom-width: 1px;
  border-bottom-color: ${grayColor};
  padding-top: 10px;
  padding-bottom: 10px;
`
export const Date = styled(Text)`
  color: ${grayColor};
`
export const Flex = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

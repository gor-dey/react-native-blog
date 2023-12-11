import { defaultPadding } from '@shared/cssConstants'
import { View, Text } from 'react-native'
import styled from 'styled-components'

export const CardWrapper = styled(View)`
  width: 100%;
  height: 100px;
  display: flex;
  padding: ${defaultPadding};
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-radius: 11px;
  gap: 10px;
  border-width: 1px;
  border-color: #e5e5e5;
`

export const TextFlex = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  max-width: 70%;
`
export const Title = styled(Text)`
  font-weight: 700;
`

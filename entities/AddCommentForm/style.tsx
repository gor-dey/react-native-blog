import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { blueColor, defaultPadding, grayColor } from '@shared/cssConstants'

export const Input = styled(TextInput)`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${grayColor};
  display: flex;
  padding: 10px;
`
export const ButtonSubmit = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${blueColor};
  padding: ${defaultPadding};
  align-items: center;
  border-radius: 5px;
`
export const ButtonText = styled(Text)`
  color: #fff;
  font-weight: 600;
`
export const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`

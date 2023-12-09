import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'
import { blueColor } from '@shared/cssConstants'

export const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`
export const StyledTextInput = styled(TextInput)`
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  width: 100%;
  margin-bottom: 16px;
  color: #fff;
`
export const InputWrapper = styled(View)`
  flex: 1;
  width: 100%;
`
export const ButtonSubmit = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${blueColor};
  padding: 16px;
  align-items: center;
  border-radius: 5px;
`
export const ButtonText = styled(Text)`
  color: #fff;
  font-weight: 600;
`

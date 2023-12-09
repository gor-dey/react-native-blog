import { View, Text, Image, Platform } from 'react-native'
import styled from 'styled-components'

const selectStyles = (styles: { ios?: string; android?: string }) => {
  return Platform.OS === 'ios' ? styles.ios : styles.android
}

export const CardWrapper = styled(View)`
  width: 100%;
  height: 100px;
  display: flex;
  padding: 10px;
  flex-direction: row;
  justify-content: start;
  border-radius: 11px;
  gap: 10px;
  border-width: 1px;
  border-color: #e5e5e5;

  ${selectStyles({
    ios: `
      shadow-color: #000;
      shadow-offset: { width: 0, height: 3 };
      shadow-opacity: 0.27;
      shadow-radius: 4.65;
    `,
    android: `
      elevation: 6;
    `
  })}
`

export const TextFlex = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: start;
`
export const Title = styled(Text)`
  font-weight: 700;
`

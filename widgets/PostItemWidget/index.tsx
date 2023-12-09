import { Id } from '@shared/types'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components'
import { Wrapper } from 'widgets/AuthWidget/style'

type Prop = {
  id: Id
  title: string
}

const CardWrapper = styled(View)`
  width: 100%;
  height: 100px;
  display: flex;
  padding: 10px;
  flex-direction: row;
  justify-content: start;
  border-radius: 11px;
  gap: 10px;
  border: 1px solid #e5e5e5;

  overflow: hidden;

  /* shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 3;
  }
  shadow-opacity: 0.27;
  shadow-radius: 4.65; */
  elevation: 6;
`

const TextFlex = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: start;
`
const Title = styled(Text)`
  font-weight: 700;
`

export const PostItemWidget = ({ id, title }: Prop) => {
  return (
    <CardWrapper>
      <Image
        style={{ borderRadius: 11 }}
        source={{
          uri: 'https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg'
        }}
        width={80}
        height={80}
        resizeMode="cover"
      />
      <TextFlex>
        <Title>
          {id}
          {id}
          {id}
          {id} {id}
          {id}
          {id}
          {id}
        </Title>
        <Text>{title}</Text>
      </TextFlex>
    </CardWrapper>
  )
}

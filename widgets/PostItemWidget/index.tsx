import { Id } from '@shared/types'
import { Text, Image } from 'react-native'
import { CardWrapper, TextFlex, Title } from './style'

type Prop = {
  id: Id
  title: string
}

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

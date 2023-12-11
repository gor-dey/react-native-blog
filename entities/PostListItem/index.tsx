import { Text, Image } from 'react-native'
import { CardWrapper, TextFlex, Title } from './style'
import { imgUrl } from '@shared/utils'

type Prop = {
  body: string
  title: string
}

export const PostItem = ({ body, title }: Prop) => {
  return (
    <CardWrapper>
      <Image
        style={{ borderRadius: 11 }}
        source={{
          uri: imgUrl
        }}
        width={80}
        height={80}
        resizeMode="cover"
      />
      <TextFlex>
        <Title>{title}</Title>
        <Text numberOfLines={2} ellipsizeMode="tail">
          {body}
        </Text>
      </TextFlex>
    </CardWrapper>
  )
}

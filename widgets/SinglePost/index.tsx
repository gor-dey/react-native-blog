import { useRoute } from '@react-navigation/native'
import { Store } from '@shared/store'
import { Id, PostType } from '@shared/types'
import { Text, Image, View, ActivityIndicator } from 'react-native'
import { fishyText, imgUrl } from '@shared/utils'
import { observer } from 'mobx-react-lite'
import { PostWrapper } from '@shared/components'
import { Flex, Title } from './style'
import { CommentAuthor, LikeButton } from '@entities'

export const SinglePost = observer(() => {
  const store = Store
  const route = useRoute()
  const { id } = route.params as { id: Id }
  const localPost: PostType | null = store.postsList[id - 1]

  if (!localPost) {
    return <ActivityIndicator size={'large'} />
  }

  return (
    <>
      <Image
        style={{ width: '100%', height: 300 }}
        source={{
          uri: imgUrl
        }}
        resizeMode="cover"
      />
      <PostWrapper>
        <Title>{localPost?.title}</Title>
        <Text>
          {localPost?.body} {fishyText}
        </Text>

        <Flex>
          <CommentAuthor />
          <LikeButton postId={id as Id} />
        </Flex>
      </PostWrapper>
    </>
  )
})

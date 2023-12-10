import { useRoute } from '@react-navigation/native'
import { Store } from '@shared/store'
import { PostWrapper } from '@shared/styles'
import { Id } from '@shared/types'
import { imgUrl } from '@shared/utils'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components'

const Title = styled(Text)`
  font-weight: 700;
  font-size: 16px;
`

export const Comments = observer(() => {
  const store = Store
  const route = useRoute()
  const { id } = route.params as { id: Id }

  useEffect(() => {
    store.getComments(id as Id)
  }, [])

  if (store.commentsList.length === 0 && !store.isLoading)
    return <Text>Пока ни одного комментария</Text>
  return (
    <PostWrapper>
      <Title>Комментарии:</Title>
      {store.commentsList.map(comment => {
        return (
          <View key={comment.id}>
            <Image
              source={{ uri: imgUrl }}
              width={30}
              height={30}
              style={{ borderRadius: 30 }}
            />
            <Text>{comment.username}</Text>
            <Text>{comment.comment}</Text>
          </View>
        )
      })}
    </PostWrapper>
  )
})

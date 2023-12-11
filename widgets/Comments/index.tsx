import { useRoute } from '@react-navigation/native'
import { Store } from '@shared/store'
import { PostWrapper } from '@shared/components'
import { AnswersType, Id } from '@shared/types'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Text, ActivityIndicator } from 'react-native'
import { AddCommentForm, CommentAuthor } from '@entities'
import { CommentWrapper, MainText, Title, Date, Flex } from './style'
import { formattedDate } from '@shared/utils'

export const Comments = observer(() => {
  const store = Store
  const route = useRoute()
  const { id } = route.params as { id: Id }

  useEffect(() => {
    store.getComments(id as Id)
  }, [])

  if (store.isLoading) return <ActivityIndicator size={'large'} />
  if (store.commentsList.length === 0 && !store.isLoading)
    return <Text>Пока ни одного комментария</Text>
  return (
    <PostWrapper>
      <AddCommentForm />
      <Title>Комментарии:</Title>
      {store.commentsList.map((comment: AnswersType) => {
        return (
          <CommentWrapper key={comment.id}>
            <Flex>
              <CommentAuthor username={comment.username} />
              <Date>{formattedDate}</Date>
            </Flex>

            <MainText>{comment.comment}</MainText>
          </CommentWrapper>
        )
      })}
    </PostWrapper>
  )
})

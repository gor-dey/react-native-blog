import { StarElement } from '@shared/components'
import { Store } from '@shared/store'
import { Id, PostType } from '@shared/types'
import { observer } from 'mobx-react-lite'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

const TouchableOpacityStyled = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`
const LikesCount = styled(Text)`
  font-size: 20px;
  font-weight: 600;
`

export const LikeButton = observer(({ postId }: { postId: Id }) => {
  const store = Store
  const localPost: PostType | null = store.postsList[postId - 1]

  return (
    <TouchableOpacityStyled
      onPress={() => {
        store.setLikes(postId)
      }}
    >
      <View>
        <LikesCount>{localPost?.likes}</LikesCount>
      </View>
      <View>
        <StarElement />
      </View>
    </TouchableOpacityStyled>
  )
})

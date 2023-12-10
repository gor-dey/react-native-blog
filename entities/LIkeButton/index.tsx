import { PostType } from '@shared/types'
import { Text } from 'react-native'

export const LikeButton = (localPost: PostType) => {
  return <Text>♥ {localPost.likes}</Text>
}

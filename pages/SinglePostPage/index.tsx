import { Comments, SinglePost } from '@widgets'
import { ScrollView } from 'react-native'

export const SinglePostPage = () => {
  return (
    <ScrollView>
      <SinglePost />
      <Comments />
    </ScrollView>
  )
}

import { SinglePost } from '@widgets'
import { ScrollView } from 'react-native'
import { Comments } from 'widgets/Comments'

export const SinglePostPage = () => {
  return (
    <ScrollView>
      <SinglePost />
      <Comments />
    </ScrollView>
  )
}

import { SinglePost } from '@widgets'
import { ScrollView, View } from 'react-native'
import { Comments } from 'widgets/Comments'
// import { Store } from '@shared/store'
// import { useRoute } from '@react-navigation/native'
// import { Id } from '@shared/types'
// import { observer } from 'mobx-react-lite'

export const SinglePostPage = () => {
  // const store = Store
  // const route = useRoute()
  // const { id } = route.params as { id: Id }

  return (
    <ScrollView
    // refreshControl={
    //   <RefreshControl
    //     refreshing={store.isLoading}
    //     onRefresh={async () => await store.getPostById(id)}
    //   />
    // }
    >
      <SinglePost />
      <Comments />
    </ScrollView>
  )
}

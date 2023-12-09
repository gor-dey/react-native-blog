import { useStore } from '@shared/store'
import { FlatList, RefreshControl, TouchableOpacity, View } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { PostItemWidget } from '@widgets'
import styled from 'styled-components'

const PostWrapper = styled(View)`
  margin-bottom: 10px;
`

export const PostsListWidget = observer(() => {
  const store = useStore

  useEffect(() => {
    store.getPosts()
  }, [])

  return (
    <FlatList
      style={{ padding: 10 }}
      refreshControl={
        <RefreshControl
          refreshing={store.isLoading}
          onRefresh={store.getPosts}
        />
      }
      data={store.postsList}
      renderItem={({ item }) => {
        if (!item) return null
        return (
          <PostWrapper>
            <TouchableOpacity onPress={() => {}}>
              <PostItemWidget {...item} />
            </TouchableOpacity>
          </PostWrapper>
        )
      }}
      keyExtractor={item => item.id.toString()}
    />
  )
})

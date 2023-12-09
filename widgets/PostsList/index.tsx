import { Store } from '@shared/store'
import { FlatList, RefreshControl, TouchableOpacity, View } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { PostItem } from '@widgets'
import styled from 'styled-components'
import { Link } from 'expo-router'

const PostWrapper = styled(View)`
  margin-bottom: 10px;
`

export const PostsList = observer(() => {
  const store = Store

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
            <Link href={`/list-rout/${item.id}`} asChild>
              <TouchableOpacity>
                <PostItem {...item} />
              </TouchableOpacity>
            </Link>
          </PostWrapper>
        )
      }}
      keyExtractor={item => item.id.toString()}
    />
  )
})

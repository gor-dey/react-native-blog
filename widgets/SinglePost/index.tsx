import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { Store } from '@shared/store'
import { Id } from '@shared/types'
import { ScrollView, Text, Image, RefreshControl } from 'react-native'
import { PostWrapper, Title } from './style'
import { imgUrl } from '@shared/utils'

export const SinglePost = () => {
  const store = Store
  const route = useRoute()

  const { id } = route.params as { id: Id }

  useEffect(() => {
    store.getPostById(id as Id)
  }, [id])

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={store.isLoading}
          onRefresh={(): Promise<void> => store.getPostById(id)}
        />
      }
    >
      <Image
        style={{ width: '100%', height: 300 }}
        source={{
          uri: imgUrl
        }}
        resizeMode="cover"
      />
      <PostWrapper>
        <Title>{store.actualPost?.title}</Title>
        <Text>{store.actualPost?.body}</Text>
        <Text>♥ {store.actualPost?.likes}</Text>
      </PostWrapper>
    </ScrollView>
  )
}
